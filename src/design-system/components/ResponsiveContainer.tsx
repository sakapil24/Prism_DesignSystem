/**
 * CRM Design System Example — ResponsiveContainer
 *
 * CSS-only breakpoint switcher. Renders `mobile` content below lg: breakpoint
 * and `desktop` content at lg: and above. No JavaScript required.
 */

import * as React from 'react';
import { cn } from '../utils/cn';

interface ResponsiveContainerProps {
  /** Content shown below the breakpoint (mobile) */
  mobile: React.ReactNode;
  /** Content shown at or above the breakpoint (desktop) */
  desktop: React.ReactNode;
  /** Additional class for the wrapper */
  className?: string;
}

function ResponsiveContainer({ mobile, desktop, className }: ResponsiveContainerProps) {
  return (
    <>
      {/* Mobile — hidden on lg+ */}
      <div className={cn('lg:hidden', className)}>{mobile}</div>
      {/* Desktop — hidden below lg */}
      <div className={cn('hidden lg:block', className)}>{desktop}</div>
    </>
  );
}

ResponsiveContainer.displayName = 'ResponsiveContainer';

export { ResponsiveContainer };
export type { ResponsiveContainerProps };
