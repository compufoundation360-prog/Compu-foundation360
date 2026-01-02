
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SimulatorRegistry from '@/simulators/SimulatorRegistry';
import { Button } from '@/components/ui/button';
import { X, ArrowLeft } from 'lucide-react';

const SimulatorPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-950 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Error: No Simulator ID provided</h1>
                    <Button onClick={() => navigate(-1)} variant="outline">Go Back</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 bg-background flex flex-col h-screen w-screen overflow-hidden">
            {/* Header / Toolbar */}
            <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border p-4 flex items-center justify-between shadow-sm shrink-0 z-10 h-[60px]">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(-1)}
                        className="text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Exit Simulator
                    </Button>
                    <div className="h-6 w-px bg-border mx-2 hidden md:block"></div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">L</div>
                    <h1 className="text-foreground font-bold text-lg hidden md:block tracking-tight">Interactive Lab Environment</h1>
                </div>

                <div className="flex items-center gap-2">
                    {/* Optional: Add help/reset buttons here later */}
                    <div className="text-xs text-muted-foreground hidden sm:block"> v1.0.0 </div>
                </div>
            </div>

            {/* Simulator Content Area */}
            <div className="flex-1 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <SimulatorRegistry id={id} />
                </div>
            </div>
        </div>
    );
};

export default SimulatorPage;
