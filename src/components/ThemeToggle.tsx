"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"
import { useTheme } from '@/context/ThemeContext'

type AnimationType =
    | "none"
    | "circle-spread"
    | "round-morph"
    | "swipe-left"
    | "swipe-up"
    | "diag-down-right"
    | "fade-in-out"
    | "shrink-grow"
    | "flip-x-in"
    | "split-vertical"
    | "swipe-right"
    | "swipe-down"
    | "wave-ripple"

interface ToggleThemeProps
    extends React.ComponentPropsWithoutRef<"button"> {
    duration?: number
    animationType?: AnimationType
}

export const ThemeToggle = ({
    className,
    duration = 1000,
    animationType = "circle-spread",
    ...props
}: ToggleThemeProps) => {
    const { theme, toggleTheme: contextToggleTheme } = useTheme()
    const isDark = theme === 'dark'
    const buttonRef = useRef<HTMLButtonElement>(null)

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return

        // Get button position before any DOM changes
        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2

        // Calculate maximum radius for circle spread
        // Use the farthest corner from the button center, with a small buffer for full coverage
        const maxRadius = Math.max(
            Math.hypot(x, y),
            Math.hypot(window.innerWidth - x, y),
            Math.hypot(x, window.innerHeight - y),
            Math.hypot(window.innerWidth - x, window.innerHeight - y)
        ) + 50 // Add buffer to ensure full coverage

        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Check if view transitions are supported
        if (!document.startViewTransition) {
            // Fallback for browsers without view transitions
            contextToggleTheme()
            return
        }

        // Start view transition
        const transition = document.startViewTransition(() => {
            flushSync(() => {
                contextToggleTheme()
            })
        })

        // Wait for transition to be ready
        await transition.ready

        // Apply animation based on type
        switch (animationType) {
            case "circle-spread":
                // Fixed circle-spread animation
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${maxRadius}px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration,
                        easing: "ease-in-out",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "round-morph":
                document.documentElement.animate(
                    [
                        { opacity: 0, transform: "scale(0.8) rotate(5deg)" },
                        { opacity: 1, transform: "scale(1) rotate(0deg)" },
                    ],
                    {
                        duration: duration * 1.2,
                        easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "swipe-left":
                document.documentElement.animate(
                    {
                        clipPath: [
                            `inset(0 0 0 ${viewportWidth}px)`,
                            `inset(0 0 0 0)`,
                        ],
                    },
                    {
                        duration,
                        easing: "cubic-bezier(0.2, 0, 0, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "swipe-up":
                document.documentElement.animate(
                    {
                        clipPath: [
                            `inset(${viewportHeight}px 0 0 0)`,
                            `inset(0 0 0 0)`,
                        ],
                    },
                    {
                        duration,
                        easing: "cubic-bezier(0.2, 0, 0, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "diag-down-right":
                document.documentElement.animate(
                    {
                        clipPath: [
                            `polygon(0 0, 0 0, 0 0, 0 0)`,
                            `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                        ],
                    },
                    {
                        duration: duration * 1.5,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "fade-in-out":
                document.documentElement.animate(
                    {
                        opacity: [0, 1],
                    },
                    {
                        duration: duration * 0.5,
                        easing: "ease-in-out",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "shrink-grow":
                document.documentElement.animate(
                    [
                        { transform: "scale(0.9)", opacity: 0 },
                        { transform: "scale(1)", opacity: 1 },
                    ],
                    {
                        duration: duration * 1.2,
                        easing: "cubic-bezier(0.19, 1, 0.22, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                document.documentElement.animate(
                    [
                        { transform: "scale(1)", opacity: 1 },
                        { transform: "scale(1.05)", opacity: 0 },
                    ],
                    {
                        duration: duration * 1.2,
                        easing: "cubic-bezier(0.19, 1, 0.22, 1)",
                        pseudoElement: "::view-transition-old(root)",
                    }
                )
                break

            case "flip-x-in":
                const styleElement = document.createElement('style');
                styleElement.textContent = `
                    ::view-transition-group(root) { perspective: 1000px; }
                    ::view-transition-old(root) { transform-origin: center; animation: flip-out 400ms forwards; }
                    ::view-transition-new(root) { transform-origin: center; animation: flip-in 400ms forwards; }
                    
                    @keyframes flip-out { from { transform: rotateY(0deg); opacity: 1; } to { transform: rotateY(-90deg); opacity: 0; } }
                    @keyframes flip-in { from { transform: rotateY(90deg); opacity: 0; } to { transform: rotateY(0deg); opacity: 1; } }
                `;
                document.head.appendChild(styleElement);
                break

            case "split-vertical":
                document.documentElement.animate(
                    [{ opacity: 0 }, { opacity: 1 }],
                    {
                        duration: duration * 0.75,
                        easing: "ease-in",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                document.documentElement.animate(
                    [
                        { clipPath: 'inset(0 0 0 0)', transform: 'none' },
                        { clipPath: 'inset(0 40% 0 40%)', transform: 'scale(1.2)' },
                        { clipPath: 'inset(0 50% 0 50%)', transform: 'scale(1)' },
                    ],
                    {
                        duration: duration * 1.5,
                        easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                        pseudoElement: "::view-transition-old(root)",
                    }
                )
                break

            case "swipe-right":
                document.documentElement.animate(
                    {
                        clipPath: [
                            `inset(0 ${viewportWidth}px 0 0)`,
                            `inset(0 0 0 0)`,
                        ],
                    },
                    {
                        duration,
                        easing: "cubic-bezier(0.2, 0, 0, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "swipe-down":
                document.documentElement.animate(
                    {
                        clipPath: [
                            `inset(0 0 ${viewportHeight}px 0)`,
                            `inset(0 0 0 0)`,
                        ],
                    },
                    {
                        duration,
                        easing: "cubic-bezier(0.2, 0, 0, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "wave-ripple":
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0% at 50% 50%)`,
                            `circle(${maxRadius}px at 50% 50%)`,
                        ],
                    },
                    {
                        duration: duration * 1.5,
                        easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                        pseudoElement: "::view-transition-new(root)",
                    }
                )
                break

            case "none":
            default:
                break
        }
    }, [isDark, duration, animationType])

    const handleClick = useCallback(() => {
        toggleTheme()
    }, [toggleTheme])

    return (
        <>
            <button
                ref={buttonRef}
                onClick={handleClick}
                className={cn(
                    "p-2 rounded-full transition-colors duration-300",
                    "h-9 w-9 flex items-center justify-center",
                    "hover:bg-sidebar-accent dark:hover:bg-sidebar-accent",
                    "text-sidebar-foreground dark:text-sidebar-foreground",
                    className
                )}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                {...props}
            >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Override default view transition animation */}
            {animationType !== 'flip-x-in' && (
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            ::view-transition-old(root),
                            ::view-transition-new(root) {
                                animation: none;
                                mix-blend-mode: normal;
                            }
                        `,
                    }}
                />
            )}
        </>
    )
}

