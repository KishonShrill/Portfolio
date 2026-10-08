"use client";

import { useRef, useState, useEffect } from "react";
import { animate, scrambleText } from "animejs";

const DEFAULT_LABEL = "[ REACH OUT // INITIATE COMMS ]";
const EMAIL = "crystalbluew@gmail.com";

export function ReachOutButton() {
    const textRef = useRef<HTMLSpanElement>(null);
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Keep track of active animation to prevent overlapping glitches
    const animRef = useRef<ReturnType<typeof animate> | null>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (!textRef.current) return;

        try {
            animRef.current = animate(textRef.current, {
                innerHTML: scrambleText({
                    text: EMAIL,
                    duration: 650,
                    chars: "01#@!&%*~_X",
                }),
            });
        } catch {
            if (textRef.current) {
                textRef.current.textContent = EMAIL;
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!textRef.current) return;

        try {
            animRef.current = animate(textRef.current, {
                innerHTML: scrambleText({
                    text: DEFAULT_LABEL,
                    duration: 550,
                    chars: "01#@!&%*~_X",
                }),
            });
        } catch {
            if (textRef.current) {
                textRef.current.textContent = DEFAULT_LABEL;
            }
        }
    };

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // Clipboard fallback
        }

        // Also trigger mailto client
        window.location.href = `mailto:${EMAIL}?subject=HIRING:%20Web%20Developer`;
    };

    useEffect(() => {
        return () => {
            if (
                animRef.current &&
                typeof animRef.current.pause === "function"
            ) {
                animRef.current.pause();
            }
        };
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
            <button
                type="button"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
                className="group relative flex-1 flex items-center justify-between gap-4 bg-charcoal text-ivory border-3 border-charcoal p-4 sm:p-6 shadow-solid hover:bg-accent-red hover:text-ivory transition-all cursor-pointer font-meta overflow-hidden select-none"
                aria-label={`Send email to ${EMAIL}`}
            >
                {/* Visual Hazard Accent Edge on Left */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent-mustard group-hover:bg-ivory transition-colors" />

                <div className="flex items-center gap-3 pl-2 truncate">
                    {/* Status Signal Dot */}
                    <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                            copied
                                ? "bg-green-400 animate-ping"
                                : isHovered
                                  ? "bg-accent-mustard animate-blink"
                                  : "bg-accent-red"
                        }`}
                    />

                    {/* Scramble Target Container */}
                    <span
                        ref={textRef}
                        className="font-bold text-sm sm:text-base md:text-lg tracking-wider uppercase truncate"
                    >
                        {DEFAULT_LABEL}
                    </span>
                </div>

                {/* Tactical Indicator / Mail Icon */}
                <div className="flex items-center gap-2 shrink-0 bg-cream text-charcoal group-hover:bg-ivory group-hover:text-accent-red px-3 py-1.5 border border-charcoal text-xs font-bold uppercase transition-colors">
                    <span>{copied ? "COPIED" : "COMMS"}</span>
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                    </span>
                </div>
            </button>

            {/* Quick Copy Feedback Pill */}
            {copied && (
                <div className="flex items-center justify-center gap-2 bg-accent-mustard text-charcoal border-2 border-charcoal font-meta font-bold text-xs px-4 py-3 uppercase tracking-wider shadow-solid animate-modal-in shrink-0">
                    <span className="w-2 h-2 rounded-full bg-charcoal animate-blink" />
                    <span>COPIED TO CLIPBOARD // OPENING MAIL</span>
                </div>
            )}
        </div>
    );
}
