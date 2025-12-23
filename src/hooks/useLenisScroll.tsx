import { createContext, useContext, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

// Create context for Lenis instance
const LenisContext = createContext<Lenis | null>(null);

/**
 * LenisProvider - Provides smooth scroll to entire app
 */
export const LenisProvider = ({
    children,
    duration = 1.2
}: {
    children: ReactNode;
    duration?: number;
}) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [duration]);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
};

/**
 * Hook to access Lenis instance for scrollTo etc.
 */
export const useLenis = () => {
    return useContext(LenisContext);
};

/**
 * Scroll to top using native smooth behavior
 */
export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
