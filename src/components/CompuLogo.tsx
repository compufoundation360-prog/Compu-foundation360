import React from "react";
import { cn } from "@/lib/utils";

export const CompuLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn("overflow-visible", className)}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="blue-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
                    <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Bottom Layer */}
            <path
                d="M50 85 L15 65 L50 45 L85 65 Z"
                fill="url(#blue-glow)"
                opacity="0.6"
                className="animate-pulse"
            />
            <path
                d="M50 85 L15 65 L15 70 L50 90 L85 70 L85 65 Z"
                fill="#1e40af" // Darker side
            />

            {/* Middle Layer */}
            <path
                d="M50 65 L15 45 L50 25 L85 45 Z"
                fill="url(#blue-glow)"
                opacity="0.8"
            />
            <path
                d="M50 65 L15 45 L15 50 L50 70 L85 50 L85 45 Z"
                fill="#1e40af"
            />

            {/* Top Layer */}
            <path
                d="M50 45 L15 25 L50 5 L85 25 Z"
                fill="url(#blue-glow)"
            />

            {/* Cloud Icon on Top */}
            <g transform="translate(32, 12) scale(0.35)">
                <path
                    d="M74.1,43.7c-2.4-12.7-13.6-22.3-26.9-22.3c-11.4,0-21.3,7.1-25.5,17.2C9.5,40.1,0,51,0,64.3 c0,15.6,12.6,28.2,28.2,28.2h44.9c14.2,0,25.7-11.5,25.7-25.7C98.8,53.2,87.9,44.6,74.1,43.7z"
                    fill="#ffffff"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
                />
            </g>
        </svg>
    );
};
