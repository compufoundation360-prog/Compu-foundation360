import { Skeleton } from "@/components/ui/skeleton";

export const PCBuilderLoader = () => {
    return (
        <div className="flex flex-col md:flex-row h-full overflow-hidden bg-background">
            {/* Left Panel: Parts Library Skeleton */}
            <aside className="w-full md:w-[280px] hidden md:flex flex-col h-full border-r border-border shrink-0 p-4 gap-4">
                <Skeleton className="h-8 w-3/4 mb-4" /> {/* Header */}
                <div className="space-y-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-10 w-full" />
                        </div>
                    ))}
                </div>
            </aside>

            {/* Center Panel: Motherboard Skeleton */}
            <main className="flex-1 relative bg-muted/50 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-[500px] space-y-4">
                    <Skeleton className="h-8 w-1/2 mx-auto" /> {/* Title */}
                    <div className="aspect-[3/4] w-full relative">
                        <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                        {/* Simulated Drop Zones */}
                        <div className="absolute top-[15%] left-[32%] w-[35%] h-[20%] border-2 border-white/10 rounded-lg" />
                        <div className="absolute top-[55%] left-[10%] w-[60%] h-[10%] border-2 border-white/10 rounded-lg" />
                    </div>
                </div>
            </main>

            {/* Right Panel: Build Summary Skeleton */}
            <aside className="w-full md:w-[240px] hidden md:flex flex-col h-full border-l border-border shrink-0 p-4 gap-4">
                <Skeleton className="h-8 w-1/2" /> {/* Title */}
                <div className="space-y-4 mt-2">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-4/6" />
                    </div>
                    <Skeleton className="h-px w-full my-4" />
                    <div className="space-y-2">
                        <Skeleton className="h-20 w-full rounded-lg" />
                        <Skeleton className="h-20 w-full rounded-lg" />
                    </div>
                </div>
            </aside>

            {/* Mobile Tab Bar Skeleton (Visible only on mobile) */}
            <div className="md:hidden mt-auto border-t border-border p-2 flex justify-around items-center bg-background safe-area-pb">
                <div className="flex flex-col items-center gap-1">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-2 w-8" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-2 w-8" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-2 w-8" />
                </div>
            </div>
        </div>
    );
};
