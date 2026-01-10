import React from "react";
import { cn } from "@/lib/utils";

export const CompuLogo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/app-logo.png"
            alt="Compu-Foundation 360 Logo"
            className={cn("object-contain rounded-2xl", className)}
            style={{
                imageRendering: "auto",
            }}
            onError={(e) => {
                console.error("Logo failed to load:", e);
                console.error("Trying to load from:", "/app-logo.png");
            }}
        />
    );
};
