import {
  ArrowUpAZ,
  ArrowDownAZ,
  Filter,
  Copy,
  BarChart3,
  Trash2,
  Calculator,
  DollarSign,
  Percent,
  Save,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

interface ExcelToolbarProps {
  selectedCell: string;
  formulaValue: string;
  onFormulaChange: (value: string) => void;
  onFormulaSubmit: () => void;
  onSortAsc: () => void;
  onSortDesc: () => void;
  onFilter: () => void;
  onRemoveDuplicates: () => void;
  onGenerateChart: () => void;
  onAutoSum: () => void;
  onFormatCurrency: () => void;
  onFormatPercent: () => void;
}

export function ExcelToolbar({
  selectedCell,
  formulaValue,
  onFormulaChange,
  onFormulaSubmit,
  onSortAsc,
  onSortDesc,
  onFilter,
  onRemoveDuplicates,
  onGenerateChart,
  onAutoSum,
  onFormatCurrency,
  onFormatPercent,
}: ExcelToolbarProps) {
  const handleSave = () => {
    toast.success("Spreadsheet saved! (Demo)");
  };

  const handleNewSheet = () => {
    toast.info("New sheet created! (Demo)");
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-toolbar-bg border-b border-toolbar-border">
      {/* File operations */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={handleSave} className="h-8 px-2">
              <Save className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Save (Ctrl+S)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={handleNewSheet} className="h-8 px-2">
              <FileSpreadsheet className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>New Sheet</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Cell reference and formula bar */}
      <div className="flex items-center gap-2 flex-1">
        <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-sm font-medium">
          {selectedCell || "A1"}
        </div>
        
        <div className="flex-1 max-w-xl">
          <Input
            value={formulaValue}
            onChange={(e) => onFormulaChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onFormulaSubmit();
              }
            }}
            placeholder="Enter value or formula (e.g., =SUM(A1:A5))"
            className="h-8 font-mono text-sm"
          />
        </div>
      </div>

      <div className="toolbar-divider" />

      {/* Quick formulas */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onAutoSum} className="h-8 px-2">
              <Calculator className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>AutoSum</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Format */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onFormatCurrency} className="h-8 px-2">
              <DollarSign className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Format as Currency</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onFormatPercent} className="h-8 px-2">
              <Percent className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Format as Percentage</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Sort & Filter */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onSortAsc} className="h-8 px-2">
              <ArrowUpAZ className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Sort A-Z</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onSortDesc} className="h-8 px-2">
              <ArrowDownAZ className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Sort Z-A</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onFilter} className="h-8 px-2">
              <Filter className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Filter</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={onRemoveDuplicates} className="h-8 px-2">
              <Copy className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Remove Duplicates</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" onClick={onGenerateChart} className="h-8">
            <BarChart3 className="w-4 h-4 mr-1" />
            Chart
          </Button>
        </TooltipTrigger>
        <TooltipContent>Generate chart from selected column</TooltipContent>
      </Tooltip>
    </div>
  );
}
