import { useState, useCallback, useRef } from "react";
import { ExcelToolbar } from "./ExcelToolbar";
import { ExcelChart } from "./ExcelChart";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { ContextMenuWrapper, ContextMenuAction } from "@/components/ui/context-menu-wrapper";
import { Copy, Scissors, ClipboardPaste, Trash2, ArrowUpAZ, ArrowDownAZ, Calculator, Percent, DollarSign, Calendar } from "lucide-react";

type CellData = Record<string, string>;
type CellFormat = Record<string, { bold?: boolean; italic?: boolean; bgColor?: string; textColor?: string; format?: string }>;

const ROWS = 15;
const COLS = 12;

const getColumnLetter = (index: number): string => {
  return String.fromCharCode(65 + index);
};

const getCellAddress = (row: number, col: number): string => {
  return `${getColumnLetter(col)}${row + 1}`;
};

const parseRange = (range: string): string[] => {
  const match = range.match(/([A-L])(\d+):([A-L])(\d+)/i);
  if (!match) return [];
  
  const [, startCol, startRow, endCol, endRow] = match;
  const cells: string[] = [];
  
  const startColIndex = startCol.toUpperCase().charCodeAt(0) - 65;
  const endColIndex = endCol.toUpperCase().charCodeAt(0) - 65;
  const startRowIndex = parseInt(startRow) - 1;
  const endRowIndex = parseInt(endRow) - 1;
  
  for (let row = startRowIndex; row <= endRowIndex; row++) {
    for (let col = startColIndex; col <= endColIndex; col++) {
      cells.push(getCellAddress(row, col));
    }
  }
  
  return cells;
};

export function ExcelSimulator() {
  const [cells, setCells] = useState<CellData>({});
  const [cellFormats, setCellFormats] = useState<CellFormat>({});
  const [selectedCell, setSelectedCell] = useState<string>("A1");
  const [formulaValue, setFormulaValue] = useState("");
  const [selectionStart, setSelectionStart] = useState<string | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<string | null>(null);
  const [chartData, setChartData] = useState<{ label: string; value: number }[] | null>(null);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [clipboard, setClipboard] = useState<{ value: string; format?: CellFormat[string] } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const getCellValue = useCallback((address: string): number => {
    const value = cells[address];
    if (!value) return 0;
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  }, [cells]);

  const evaluateFormula = useCallback((formula: string): string => {
    if (!formula.startsWith("=")) return formula;
    
    const formulaUpper = formula.toUpperCase();
    
    try {
      // SUM
      const sumMatch = formulaUpper.match(/=SUM\(([A-L]\d+):([A-L]\d+)\)/);
      if (sumMatch) {
        const range = parseRange(`${sumMatch[1]}:${sumMatch[2]}`);
        const sum = range.reduce((acc, cell) => acc + getCellValue(cell), 0);
        return sum.toString();
      }
      
      // AVERAGE
      const avgMatch = formulaUpper.match(/=AVERAGE\(([A-L]\d+):([A-L]\d+)\)/);
      if (avgMatch) {
        const range = parseRange(`${avgMatch[1]}:${avgMatch[2]}`);
        const values = range.map(getCellValue).filter(v => v !== 0);
        const avg = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
        return avg.toFixed(2);
      }
      
      // MAX
      const maxMatch = formulaUpper.match(/=MAX\(([A-L]\d+):([A-L]\d+)\)/);
      if (maxMatch) {
        const range = parseRange(`${maxMatch[1]}:${maxMatch[2]}`);
        const max = Math.max(...range.map(getCellValue));
        return max.toString();
      }
      
      // MIN
      const minMatch = formulaUpper.match(/=MIN\(([A-L]\d+):([A-L]\d+)\)/);
      if (minMatch) {
        const range = parseRange(`${minMatch[1]}:${minMatch[2]}`);
        const values = range.map(getCellValue).filter(v => v !== 0);
        const min = values.length ? Math.min(...values) : 0;
        return min.toString();
      }
      
      // COUNT
      const countMatch = formulaUpper.match(/=COUNT\(([A-L]\d+):([A-L]\d+)\)/);
      if (countMatch) {
        const range = parseRange(`${countMatch[1]}:${countMatch[2]}`);
        const count = range.filter(cell => {
          const val = cells[cell];
          return val && !isNaN(parseFloat(val));
        }).length;
        return count.toString();
      }

      // IF
      const ifMatch = formulaUpper.match(/=IF\(([A-L]\d+)([<>=]+)(\d+),(.+),(.+)\)/);
      if (ifMatch) {
        const [, cellRef, operator, compareVal, trueVal, falseVal] = ifMatch;
        const cellValue = getCellValue(cellRef);
        const compareNum = parseFloat(compareVal);
        let result = false;
        
        switch (operator) {
          case ">": result = cellValue > compareNum; break;
          case "<": result = cellValue < compareNum; break;
          case ">=": result = cellValue >= compareNum; break;
          case "<=": result = cellValue <= compareNum; break;
          case "=": case "==": result = cellValue === compareNum; break;
        }
        
        return result ? trueVal.trim().replace(/"/g, "") : falseVal.trim().replace(/"/g, "");
      }

      // CONCAT
      const concatMatch = formulaUpper.match(/=CONCAT\(([A-L]\d+),([A-L]\d+)\)/);
      if (concatMatch) {
        const [, cell1, cell2] = concatMatch;
        return (cells[cell1] || "") + (cells[cell2] || "");
      }

      // NOW
      if (formulaUpper === "=NOW()") {
        return new Date().toLocaleString();
      }

      // TODAY
      if (formulaUpper === "=TODAY()") {
        return new Date().toLocaleDateString();
      }

      // ROUND
      const roundMatch = formulaUpper.match(/=ROUND\(([A-L]\d+),(\d+)\)/);
      if (roundMatch) {
        const [, cellRef, decimals] = roundMatch;
        const value = getCellValue(cellRef);
        return value.toFixed(parseInt(decimals));
      }

      // ABS
      const absMatch = formulaUpper.match(/=ABS\(([A-L]\d+)\)/);
      if (absMatch) {
        return Math.abs(getCellValue(absMatch[1])).toString();
      }

      // SQRT
      const sqrtMatch = formulaUpper.match(/=SQRT\(([A-L]\d+)\)/);
      if (sqrtMatch) {
        return Math.sqrt(getCellValue(sqrtMatch[1])).toFixed(2);
      }

      // POWER
      const powerMatch = formulaUpper.match(/=POWER\(([A-L]\d+),(\d+)\)/);
      if (powerMatch) {
        return Math.pow(getCellValue(powerMatch[1]), parseInt(powerMatch[2])).toString();
      }

      // LEN
      const lenMatch = formulaUpper.match(/=LEN\(([A-L]\d+)\)/);
      if (lenMatch) {
        return (cells[lenMatch[1]] || "").length.toString();
      }

      // UPPER
      const upperMatch = formulaUpper.match(/=UPPER\(([A-L]\d+)\)/);
      if (upperMatch) {
        return (cells[upperMatch[1]] || "").toUpperCase();
      }

      // LOWER
      const lowerMatch = formulaUpper.match(/=LOWER\(([A-L]\d+)\)/);
      if (lowerMatch) {
        return (cells[lowerMatch[1]] || "").toLowerCase();
      }
      
      return "#ERROR";
    } catch {
      return "#ERROR";
    }
  }, [cells, getCellValue]);

  const handleCellClick = (address: string) => {
    setSelectedCell(address);
    setFormulaValue(cells[address] || "");
  };

  const handleCellChange = (address: string, value: string) => {
    setCells(prev => ({ ...prev, [address]: value }));
  };

  const handleFormulaSubmit = () => {
    const result = evaluateFormula(formulaValue);
    setCells(prev => ({ ...prev, [selectedCell]: formulaValue.startsWith("=") ? result : formulaValue }));
  };

  const navigateCell = (direction: "up" | "down" | "left" | "right") => {
    const col = selectedCell.charAt(0);
    const row = parseInt(selectedCell.slice(1));
    const colIndex = col.charCodeAt(0) - 65;

    let newCol = colIndex;
    let newRow = row;

    switch (direction) {
      case "up": newRow = Math.max(1, row - 1); break;
      case "down": newRow = Math.min(ROWS, row + 1); break;
      case "left": newCol = Math.max(0, colIndex - 1); break;
      case "right": newCol = Math.min(COLS - 1, colIndex + 1); break;
    }

    const newAddress = getCellAddress(newRow - 1, newCol);
    setSelectedCell(newAddress);
    setFormulaValue(cells[newAddress] || "");
  };

  const handleCopy = () => {
    setClipboard({ value: cells[selectedCell] || "", format: cellFormats[selectedCell] });
    toast.success("Copied!");
  };

  const handleCut = () => {
    setClipboard({ value: cells[selectedCell] || "", format: cellFormats[selectedCell] });
    setCells(prev => ({ ...prev, [selectedCell]: "" }));
    toast.success("Cut!");
  };

  const handlePaste = () => {
    if (clipboard) {
      setCells(prev => ({ ...prev, [selectedCell]: clipboard.value }));
      if (clipboard.format) {
        setCellFormats(prev => ({ ...prev, [selectedCell]: clipboard.format! }));
      }
      toast.success("Pasted!");
    }
  };

  const handleDelete = () => {
    setCells(prev => ({ ...prev, [selectedCell]: "" }));
    toast.success("Cell cleared!");
  };

  const handleFormatCurrency = () => {
    const value = getCellValue(selectedCell);
    setCells(prev => ({ ...prev, [selectedCell]: `$${value.toFixed(2)}` }));
    toast.success("Formatted as currency!");
  };

  const handleFormatPercent = () => {
    const value = getCellValue(selectedCell);
    setCells(prev => ({ ...prev, [selectedCell]: `${(value * 100).toFixed(0)}%` }));
    toast.success("Formatted as percentage!");
  };

  const handleSortAsc = () => {
    if (!selectionStart) {
      toast.error("Please select a column first");
      return;
    }
    
    const col = selectionStart.charAt(0);
    const values: { row: number; value: string }[] = [];
    
    for (let i = 0; i < ROWS; i++) {
      const addr = `${col}${i + 1}`;
      values.push({ row: i, value: cells[addr] || "" });
    }
    
    values.sort((a, b) => {
      const numA = parseFloat(a.value);
      const numB = parseFloat(b.value);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.value.localeCompare(b.value);
    });
    
    const newCells = { ...cells };
    values.forEach((v, i) => {
      newCells[`${col}${i + 1}`] = v.value;
    });
    setCells(newCells);
    toast.success("Column sorted A-Z");
  };

  const handleSortDesc = () => {
    if (!selectionStart) {
      toast.error("Please select a column first");
      return;
    }
    
    const col = selectionStart.charAt(0);
    const values: { row: number; value: string }[] = [];
    
    for (let i = 0; i < ROWS; i++) {
      const addr = `${col}${i + 1}`;
      values.push({ row: i, value: cells[addr] || "" });
    }
    
    values.sort((a, b) => {
      const numA = parseFloat(a.value);
      const numB = parseFloat(b.value);
      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return b.value.localeCompare(a.value);
    });
    
    const newCells = { ...cells };
    values.forEach((v, i) => {
      newCells[`${col}${i + 1}`] = v.value;
    });
    setCells(newCells);
    toast.success("Column sorted Z-A");
  };

  const handleFilter = () => {
    const value = prompt("Enter value to filter by:");
    if (value !== null) {
      setFilterValue(value || null);
      toast.success(value ? `Filtering by "${value}"` : "Filter cleared");
    }
  };

  const handleRemoveDuplicates = () => {
    if (!selectionStart) {
      toast.error("Please select a column first");
      return;
    }
    
    const col = selectionStart.charAt(0);
    const seen = new Set<string>();
    const newCells = { ...cells };
    let removed = 0;
    
    for (let i = 0; i < ROWS; i++) {
      const addr = `${col}${i + 1}`;
      const value = cells[addr];
      if (value && seen.has(value)) {
        newCells[addr] = "";
        removed++;
      } else if (value) {
        seen.add(value);
      }
    }
    
    setCells(newCells);
    toast.success(`Removed ${removed} duplicate(s)`);
  };

  const handleGenerateChart = () => {
    const col = selectedCell.charAt(0);
    const data: { label: string; value: number }[] = [];
    
    for (let i = 0; i < ROWS; i++) {
      const addr = `${col}${i + 1}`;
      const value = parseFloat(cells[addr] || "0");
      if (!isNaN(value) && value !== 0) {
        data.push({ label: addr, value });
      }
    }
    
    if (data.length === 0) {
      toast.error("No numeric data found in selected column");
      return;
    }
    
    setChartData(data);
    toast.success("Chart generated!");
  };

  const handleAutoSum = () => {
    const col = selectedCell.charAt(0);
    const row = parseInt(selectedCell.slice(1));
    const formula = `=SUM(${col}1:${col}${row - 1})`;
    setFormulaValue(formula);
    const result = evaluateFormula(formula);
    setCells(prev => ({ ...prev, [selectedCell]: result }));
    toast.success("AutoSum applied!");
  };

  const isRowVisible = (rowIndex: number): boolean => {
    if (!filterValue) return true;
    
    for (let col = 0; col < COLS; col++) {
      const addr = getCellAddress(rowIndex, col);
      if (cells[addr]?.toLowerCase().includes(filterValue.toLowerCase())) {
        return true;
      }
    }
    return false;
  };

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onCopy: handleCopy,
    onCut: handleCut,
    onPaste: handlePaste,
    onDelete: handleDelete,
    onArrowUp: () => navigateCell("up"),
    onArrowDown: () => navigateCell("down"),
    onArrowLeft: () => navigateCell("left"),
    onArrowRight: () => navigateCell("right"),
    onTab: () => navigateCell("right"),
    onEnter: () => navigateCell("down"),
  });

  // Context menu actions
  const contextMenuActions: ContextMenuAction[] = [
    { label: "Cut", icon: <Scissors className="w-4 h-4" />, shortcut: "Ctrl+X", onClick: handleCut },
    { label: "Copy", icon: <Copy className="w-4 h-4" />, shortcut: "Ctrl+C", onClick: handleCopy },
    { label: "Paste", icon: <ClipboardPaste className="w-4 h-4" />, shortcut: "Ctrl+V", onClick: handlePaste },
    { separator: true },
    { label: "Clear Cell", icon: <Trash2 className="w-4 h-4" />, shortcut: "Del", onClick: handleDelete },
    { separator: true },
    { label: "Sort A-Z", icon: <ArrowUpAZ className="w-4 h-4" />, onClick: handleSortAsc },
    { label: "Sort Z-A", icon: <ArrowDownAZ className="w-4 h-4" />, onClick: handleSortDesc },
    { separator: true },
    { label: "AutoSum", icon: <Calculator className="w-4 h-4" />, onClick: handleAutoSum },
    {
      label: "Format",
      icon: <DollarSign className="w-4 h-4" />,
      submenu: [
        { label: "Currency ($)", icon: <DollarSign className="w-4 h-4" />, onClick: handleFormatCurrency },
        { label: "Percentage (%)", icon: <Percent className="w-4 h-4" />, onClick: handleFormatPercent },
        { label: "Date", icon: <Calendar className="w-4 h-4" />, onClick: () => {
          setCells(prev => ({ ...prev, [selectedCell]: new Date().toLocaleDateString() }));
          toast.success("Formatted as date!");
        }},
      ],
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
        <ExcelToolbar
          selectedCell={selectedCell}
          formulaValue={formulaValue}
          onFormulaChange={setFormulaValue}
          onFormulaSubmit={handleFormulaSubmit}
          onSortAsc={handleSortAsc}
          onSortDesc={handleSortDesc}
          onFilter={handleFilter}
          onRemoveDuplicates={handleRemoveDuplicates}
          onGenerateChart={handleGenerateChart}
          onAutoSum={handleAutoSum}
          onFormatCurrency={handleFormatCurrency}
          onFormatPercent={handleFormatPercent}
        />
        
        <ContextMenuWrapper actions={contextMenuActions}>
          <div ref={gridRef} className="overflow-auto max-h-[500px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="excel-header excel-cell w-10"></th>
                  {Array.from({ length: COLS }, (_, i) => (
                    <th key={i} className="excel-header excel-cell">
                      {getColumnLetter(i)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: ROWS }, (_, rowIndex) => {
                  if (!isRowVisible(rowIndex)) return null;
                  
                  return (
                    <tr key={rowIndex}>
                      <td className="excel-header excel-cell text-center">
                        {rowIndex + 1}
                      </td>
                      {Array.from({ length: COLS }, (_, colIndex) => {
                        const address = getCellAddress(rowIndex, colIndex);
                        const isSelected = selectedCell === address;
                        const format = cellFormats[address];
                        
                        return (
                          <td key={colIndex} className="p-0">
                            <input
                              type="text"
                              value={cells[address] || ""}
                              onChange={(e) => handleCellChange(address, e.target.value)}
                              onClick={() => handleCellClick(address)}
                              onFocus={() => {
                                handleCellClick(address);
                                setSelectionStart(address);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleFormulaSubmit();
                                  navigateCell("down");
                                }
                              }}
                              className={cn(
                                "excel-cell w-full",
                                isSelected && "bg-selection",
                                format?.bold && "font-bold",
                                format?.italic && "italic"
                              )}
                              style={{
                                backgroundColor: format?.bgColor,
                                color: format?.textColor,
                              }}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ContextMenuWrapper>
      </div>

      {chartData && (
        <ExcelChart data={chartData} onClose={() => setChartData(null)} />
      )}

      <div className="p-3 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Formulas:</strong> =SUM, =AVERAGE, =MAX, =MIN, =COUNT, =IF, =CONCAT, =NOW(), =TODAY(), =ROUND, =ABS, =SQRT, =POWER, =LEN, =UPPER, =LOWER
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          <strong>Tips:</strong> Use arrow keys to navigate. Right-click for more options. Tab moves right, Enter moves down.
        </p>
      </div>
    </div>
  );
}
