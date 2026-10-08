"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function InitiateSequenceModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle Escape key and body scroll lock
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const modalContent = isOpen && mounted ? (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-xs select-none"
            onClick={() => setIsOpen(false)}
            aria-modal="true"
            role="dialog"
        >
            {/* Modal Card Container */}
            <div
                className="relative w-full max-w-lg bg-ivory border-4 border-charcoal shadow-[10px_10px_0px_0px_#1a1a18] animate-modal-in flex flex-col font-meta overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Window Title Bar */}
                <div className="bg-charcoal text-ivory px-4 py-2 flex justify-between items-center text-xs uppercase border-b-2 border-charcoal">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-blink" />
                        <span className="font-bold tracking-wider">SYS_ALERT // PROTOCOL: 503</span>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="hover:bg-accent-red hover:text-ivory px-2 py-0.5 border border-gray-600 text-[10px] font-bold transition-colors cursor-pointer"
                    >
                        [ESC] ✕
                    </button>
                </div>

                {/* Top Under Construction Pattern */}
                <div className="h-8 w-full pattern-hazard-mustard animate-hazard-crawl border-b-2 border-charcoal flex items-center justify-center shadow-inner">
                    <span className="bg-charcoal text-accent-mustard font-bold text-[10px] px-3 py-0.5 border border-accent-mustard uppercase tracking-widest shadow-sm">
                        ⚠️ CAUTION // UNDER CONSTRUCTION ⚠️
                    </span>
                </div>

                {/* Main Content Area */}
                <div className="p-6 sm:p-8 flex flex-col items-center text-center bg-ivory">
                    {/* Visual Warning Decal */}
                    <div className="w-14 h-14 rounded-full border-3 border-accent-red flex items-center justify-center bg-cream mb-3 shadow-solid-accent">
                        <svg
                            className="w-7 h-7 text-accent-red animate-spin-slow"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" />
                        </svg>
                    </div>

                    <div className="font-meta text-[11px] font-bold text-charcoal bg-cream border border-charcoal px-3 py-0.5 uppercase tracking-wider mb-2">
                        [ SYSTEM STATUS: RESTRUCTURING ]
                    </div>

                    {/* Red Bold Headline */}
                    <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tighter text-accent-red leading-tight my-2">
                        Content
                        <br />
                        Under Construction
                    </h3>

                    <p className="font-meta text-xs text-gray-700 max-w-sm mx-auto leading-relaxed mt-2">
                        The requested archive catalog is undergoing architectural indexing and database synchronization. Please check back shortly for deployed modules and field records.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="font-meta text-xs uppercase font-bold border-2 border-charcoal bg-white py-2.5 px-8 shadow-solid hover:bg-charcoal hover:text-ivory active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                        >
                            [ ACKNOWLEDGE & CLOSE ]
                        </button>
                    </div>
                </div>

                {/* Bottom Under Construction Pattern */}
                <div className="h-8 w-full pattern-hazard-mustard animate-hazard-crawl border-t-2 border-charcoal flex items-center justify-center shadow-inner">
                    <span className="bg-charcoal text-accent-mustard font-bold text-[10px] px-3 py-0.5 border border-accent-mustard uppercase tracking-widest shadow-sm">
                        ⚡ SEC_LVL: 0 // OFFLINE ⚡
                    </span>
                </div>

                {/* Footer Metadata */}
                <div className="px-4 py-2 bg-cream flex justify-between items-center text-[10px] text-gray-600 uppercase border-t-2 border-charcoal">
                    <span>SYS_ID: N/E/O</span>
                    <span>VER. 2.4.9</span>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="font-meta text-sm border-system py-2 px-4 hover:bg-charcoal hover:text-ivory transition-colors mt-4 bg-white shadow-solid cursor-pointer"
            >
                Initiate Sequence
            </button>

            {mounted && createPortal(modalContent, document.body)}
        </>
    );
}
