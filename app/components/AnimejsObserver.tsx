"use client";

import { useEffect } from "react";
import { animate, scrambleText } from "animejs";

export function AnimejsObserver() {
    useEffect(() => {
        const triggerScramble = (el: Element) => {
            if (el.hasAttribute("data-scrambled")) return;
            // Mark immediately so neither MutationObserver nor repeat calls can re-trigger it
            el.setAttribute("data-scrambled", "true");

            animate(el, {
                innerHTML: scrambleText({ delay: 150, duration: 1800 }),
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        triggerScramble(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.15,
            },
        );

        const observeElements = () => {
            const elements = document.querySelectorAll(
                ".scramble-text:not([data-scrambled])",
            );

            elements.forEach((el) => {
                if (el.hasAttribute("data-scrambled")) return;

                const rect = el.getBoundingClientRect();
                // If element is already in the viewport, scramble immediately
                if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
                    triggerScramble(el);
                } else {
                    observer.observe(el);
                }
            });
        };

        // Scan on mount and once after hydration
        observeElements();
        const timeoutId = setTimeout(observeElements, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return null;
}
