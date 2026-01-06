import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSimulatorStore } from "../store/simulator-store";
import { PartitionSegment } from "../lib/simulator-types";
import { X } from "lucide-react";

// Custom Simple Modal Wrapper to replace Radix and prevent freezing
function Modal({ isOpen, onClose, title, children, footer }: any) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="bg-card text-card-foreground border border-border w-full max-w-[500px] rounded-xl shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-border flex justify-between items-center bg-muted/30">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <button onClick={onClose} className="p-1 hover:bg-muted rounded-md transition-colors">
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
                {footer && (
                    <div className="p-4 border-t border-border bg-muted/30 flex justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

// === NEW VOLUME WIZARD ===
const newVolumeSchema = z.object({
    sizeMB: z.number().min(1, "Size must be at least 1 MB"),
    letter: z.string().min(1, "Select a drive letter"),
    label: z.string().min(1, "Label is required"),
    fileSystem: z.enum(["NTFS", "FAT32", "exFAT"]),
});

interface NewVolumeWizardProps {
    isOpen: boolean;
    onClose: () => void;
    diskId: string;
    segment: PartitionSegment;
}

export function NewVolumeWizard({ isOpen, onClose, diskId, segment }: NewVolumeWizardProps) {
    const { createPartition } = useSimulatorStore();
    const [step, setStep] = useState(1);

    // Safe defaults - prevent crashes if segment becomes null
    const safeSegment = segment || { sizeMB: 1000, id: '', type: 'Unallocated' as const, fileSystem: 'Unformatted' as const, label: '', driveLetter: null };

    const form = useForm<z.infer<typeof newVolumeSchema>>({
        resolver: zodResolver(newVolumeSchema),
        defaultValues: {
            sizeMB: safeSegment.sizeMB,
            letter: "E",
            label: "New Volume",
            fileSystem: "NTFS",
        },
    });

    // Reset form and step when dialog opens - REMOVED segment dependency to prevent stale access
    useEffect(() => {
        if (isOpen && segment) {
            setStep(1);
            form.reset({
                sizeMB: segment.sizeMB,
                letter: "E",
                label: "New Volume",
                fileSystem: "NTFS",
            });
        }
    }, [isOpen]); // Only depend on isOpen, not segment

    const onSubmit = (data: z.infer<typeof newVolumeSchema>) => {
        if (!segment) return;
        onClose(); // Start closing UI first
        // Small delay to let the dialog closing state register
        setTimeout(() => {
            createPartition(diskId, segment.id, data.sizeMB, data.letter, data.label, data.fileSystem);
        }, 50);
    };

    // Don't render if segment is null
    if (!segment) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="New Simple Volume Wizard"
            footer={
                <>
                    <Button variant="outline" onClick={onClose} className="border-border text-foreground hover:bg-muted">Cancel</Button>
                    <div className="flex gap-2">
                        {step > 1 && <Button variant="secondary" onClick={() => setStep(s => s - 1)} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Back</Button>}
                        {step < 3 ? (
                            <Button onClick={() => setStep(s => s + 1)}>Next</Button>
                        ) : (
                            <Button onClick={form.handleSubmit(onSubmit)}>Finish</Button>
                        )}
                    </div>
                </>
            }
        >
            <div className="text-sm text-muted-foreground mb-4">Step {step} of 3</div>

            {step === 1 && (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-foreground">Specify Volume Size (MB)</Label>
                        <div className="text-xs text-muted-foreground mb-2">Max available: {segment.sizeMB} MB</div>
                        <Input
                            type="number"
                            {...form.register("sizeMB", { valueAsNumber: true })}
                            max={segment.sizeMB}
                            className="bg-background border-input text-foreground"
                        />
                        {form.formState.errors.sizeMB && (
                            <span className="text-destructive text-xs">{form.formState.errors.sizeMB.message}</span>
                        )}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-foreground">Assign Drive Letter</Label>
                        <Select
                            onValueChange={(val) => form.setValue("letter", val)}
                            defaultValue={form.getValues("letter")}
                        >
                            <SelectTrigger className="bg-background border-input text-foreground">
                                <SelectValue placeholder="Select letter" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover text-popover-foreground border-border">
                                {["E", "F", "G", "H", "I", "J", "K", "Z"].map(l => (
                                    <SelectItem key={l} value={l}>{l}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-foreground">File System</Label>
                        <Select
                            onValueChange={(val: any) => form.setValue("fileSystem", val)}
                            defaultValue={form.getValues("fileSystem")}
                        >
                            <SelectTrigger className="bg-background border-input text-foreground">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-popover text-popover-foreground border-border">
                                <SelectItem value="NTFS">NTFS</SelectItem>
                                <SelectItem value="FAT32">FAT32</SelectItem>
                                <SelectItem value="exFAT">exFAT</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-foreground">Volume Label</Label>
                        <Input {...form.register("label")} className="bg-background border-input text-foreground" />
                    </div>
                </div>
            )}
        </Modal>
    );
}

// === SHRINK WIZARD ===
interface ShrinkWizardProps {
    isOpen: boolean;
    onClose: () => void;
    diskId: string;
    segment: PartitionSegment;
}

export function ShrinkWizard({ isOpen, onClose, diskId, segment }: ShrinkWizardProps) {
    const { shrinkPartition } = useSimulatorStore();
    const [amount, setAmount] = useState(100);

    const handleShrink = () => {
        if (!segment || amount <= 0 || amount >= segment.sizeMB) return;
        onClose(); // Close UI first
        setTimeout(() => {
            shrinkPartition(diskId, segment.id, amount);
        }, 50);
    };

    // Don't render if segment is null
    if (!segment) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`Shrink ${segment.driveLetter}:`}
            footer={
                <>
                    <Button variant="outline" onClick={onClose} className="border-border text-foreground hover:bg-muted">Cancel</Button>
                    <Button onClick={handleShrink} disabled={amount <= 0 || amount >= segment.sizeMB}>Shrink</Button>
                </>
            }
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label className="text-foreground">Total size before shrink (MB)</Label>
                    <Input disabled value={segment.sizeMB} className="bg-muted text-muted-foreground" />
                </div>
                <div className="space-y-2">
                    <Label className="text-foreground">Enter the amount of space to shrink in MB</Label>
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val >= 0) setAmount(val);
                        }}
                        max={segment.sizeMB - 1}
                        min={1}
                        className="bg-background border-input text-foreground"
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-foreground">Total size after shrink (MB)</Label>
                    <Input disabled value={segment.sizeMB - amount} className="bg-muted text-muted-foreground" />
                </div>
            </div>
        </Modal>
    );
}

// === FORMAT WIZARD ===
interface FormatWizardProps {
    isOpen: boolean;
    onClose: () => void;
    diskId: string;
    segment: PartitionSegment;
}

export function FormatWizard({ isOpen, onClose, diskId, segment }: FormatWizardProps) {
    const { formatPartition } = useSimulatorStore();
    const [label, setLabel] = useState(segment?.label || "");
    const [fs, setFs] = useState(segment?.fileSystem || "NTFS");

    const handleFormat = () => {
        if (!segment) return;
        onClose(); // Close UI first
        setTimeout(() => {
            formatPartition(diskId, segment.id, label, fs);
        }, 50);
    };

    // Don't render if segment is null
    if (!segment) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`Format ${segment.driveLetter || "Partition"}`}
            footer={
                <>
                    <Button variant="outline" onClick={onClose} className="border-border text-foreground hover:bg-muted">Cancel</Button>
                    <Button variant="destructive" onClick={handleFormat}>Format</Button>
                </>
            }
        >
            <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-red-500 text-xs font-bold">
                    Warning: Formatting erases all data on this volume.
                </div>
                <div className="space-y-2">
                    <Label className="text-foreground">Volume Label</Label>
                    <Input value={label} onChange={(e) => setLabel(e.target.value)} className="bg-background border-input text-foreground" />
                </div>
                <div className="space-y-2">
                    <Label className="text-foreground">File System</Label>
                    <Select value={fs} onValueChange={(val: any) => setFs(val)}>
                        <SelectTrigger className="bg-background border-input text-foreground">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-popover text-popover-foreground border-border">
                            <SelectItem value="NTFS">NTFS</SelectItem>
                            <SelectItem value="FAT32">FAT32</SelectItem>
                            <SelectItem value="exFAT">exFAT</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </Modal>
    );
}
