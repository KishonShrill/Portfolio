"use client";

import { useEffect } from "react";

export function RevealObserver() {
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 0.05,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, observerOptions);

        const observeElements = () => {
            const elements = document.querySelectorAll(
                ".reveal-up:not(.is-visible), .reveal-clip:not(.is-visible)",
            );

            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                // If element is already in the viewport on load, reveal immediately
                if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
                    el.classList.add("is-visible");
                } else {
                    observer.observe(el);
                }
            });
        };

        // Run across multiple ticks to handle RSC streaming & React 19 hydration
        observeElements();
        const rafId = requestAnimationFrame(observeElements);
        const timeout1 = setTimeout(observeElements, 50);
        const timeout2 = setTimeout(observeElements, 250);

        // Watch for dynamic DOM additions / route transitions
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
