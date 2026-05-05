/**
 * CRM Design System Example — Media Query Hooks
 *
 * React hooks for responsive logic that cannot be expressed purely in CSS.
 */

import { useState, useEffect } from 'react';

/**
 * Hook that listens to a CSS media query and returns whether it matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/** Returns true when viewport is below the `lg` breakpoint (1024px). */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 1023px)');
}

/** Returns true when user prefers reduced motion. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
