import { useState, useEffect } from 'react';

/**
 * BackToTop Component
 * A floating button that appears when user scrolls down and smoothly scrolls back to top
 * 
 * UI/UX Design:
 * - Appears after scrolling 500px (not just at bottom)
 * - Neon glow effect matching the portfolio theme
 * - Smooth fade + scale animation
 * - Pulse animation on hover for engagement
 * - Fixed position at bottom-right corner
 */
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when scrolled down 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Check initial scroll position
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        // Smooth scroll to top - responds immediately, animates smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
        fixed bottom-8 right-8 z-50
        w-14 h-14 rounded-full
        bg-[#0a0a0a] border border-[var(--neon-blue)]
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300 ease-out
        ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
                }
        ${isHovered
                    ? 'shadow-[0_0_30px_rgba(0,212,255,0.5),0_0_60px_rgba(0,212,255,0.3)] border-[var(--neon-blue)] bg-[rgba(0,212,255,0.1)]'
                    : 'shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                }
        group
      `}
            style={{
                backdropFilter: 'blur(10px)',
            }}
            aria-label="Back to top"
        >
            {/* Arrow Icon with animation - smooth rounded chevron */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`
                    pointer-events-none
                    text-[var(--neon-blue)] transition-all duration-300
                    ${isHovered ? 'animate-bounce-slow' : ''}
                `}
                style={{
                    filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))'
                }}
            >
                {/* Smooth rounded chevron arrow */}
                <path
                    d="M12 5L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M5 12L12 5L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Glow ring effect on hover */}
            <span
                className={`
                    pointer-events-none
                    absolute inset-0 rounded-full
                    border-2 border-[var(--neon-blue)]
                    transition-all duration-300
                    ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0'}
                `}
            />

            {/* Pulse ring animation */}
            <span
                className={`
                    pointer-events-none
                    absolute inset-0 rounded-full
                    border border-[var(--neon-blue)]
                    animate-ping-slow opacity-30
                    ${isVisible ? '' : 'hidden'}
                `}
            />
        </button>
    );
};

export default BackToTop;
