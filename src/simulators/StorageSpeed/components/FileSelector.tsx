import { File } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FileSelectorProps {
    selectedSize: number; // always in MB
    onSizeChange: (size: number) => void;
    disabled: boolean;
}

export function FileSelector({
    selectedSize,
    onSizeChange,
    disabled,
}: FileSelectorProps) {
    // Local state for the input display
    const [inputValue, setInputValue] = useState<string>('2');
    const [unit, setUnit] = useState<'MB' | 'GB'>('GB');

    // Sync local input when prop changes (e.g. initial load)
    useEffect(() => {
        if (unit === 'GB') {
            // If we are in GB mode, show prop converted to GB
            // Use parseFloat to avoid trailing zeros effectively
            setInputValue((selectedSize / 1000).toLocaleString('en-US', { maximumFractionDigits: 2 }).replace(/,/g, ''));
        } else {
            setInputValue(selectedSize.toString());
        }
    }, [selectedSize, unit]);

    const handleInputChange = (val: string) => {
        // Prevent typing more than 4 chars or negative/weird chars
        if (val.length > 4) return;

        const num = parseFloat(val);
        if (val === '' || isNaN(num)) {
            setInputValue(val);
            return;
        }

        if (num < 0) return;
        if (num > 999) return; // Strict limit

        setInputValue(val);

        if (unit === 'GB') {
            onSizeChange(num * 1000);
        } else {
            onSizeChange(num);
        }
    };

    const toggleUnit = (newUnit: 'MB' | 'GB') => {
        if (unit === newUnit) return;

        setUnit(newUnit);
        // We don't need to recalculate input value here because the useEffect 
        // will trigger when 'unit' changes and update the input value from 'selectedSize'
    };

    return (
        <div className="flex flex-col h-full bg-card/50 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                    <File size={24} className="text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-foreground">Custom File Size</h3>
                    <p className="text-sm text-muted-foreground">Enter size to copy</p>
                </div>
            </div>

            <div className="space-y-3">
                <input
                    type="number"
                    min="1"
                    max="999"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={disabled}
                    className="w-full bg-input border border-border text-foreground text-4xl font-mono font-bold py-3 px-4 rounded-lg text-center focus:ring-2 focus:ring-primary focus:border-transparent outline-none disabled:opacity-50 transition-all placeholder-muted-foreground"
                    placeholder="0"
                />

                <div className="flex bg-muted p-1 rounded-lg">
                    <button
                        onClick={() => toggleUnit('MB')}
                        disabled={disabled}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${unit === 'MB' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`}
                    >
                        MB
                    </button>
                    <button
                        onClick={() => toggleUnit('GB')}
                        disabled={disabled}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${unit === 'GB' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`}
                    >
                        GB
                    </button>
                </div>

                {/* Visual Feedback for size */}
                <div className="text-center">
                    <p className="text-xs text-muted-foreground font-mono">
                        Total Transfer Size: <span className="text-primary">{selectedSize.toLocaleString()} MB</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
