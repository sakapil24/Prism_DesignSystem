/**
 * CRM Design System Example — TypeScript Token Exports
 * Reverse-engineered from sample CRM product UI
 */

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#FBFBFB', 100: '#F8F9FA', 150: '#EEEFF1', 200: '#E6E7EA',
    300: '#CDCFD1', 400: '#A0A2A6', 500: '#808184', 600: '#505154',
    700: '#3A3B3E', 800: '#242529', 900: '#1A1B1E',
  },
  blue: {
    50: '#E5EEFF', 100: '#D6E5FF', 200: '#A8C8FF', 300: '#6EA0F7',
    400: '#4A85F2', 500: '#266DF0', 600: '#1A5AD4', 700: '#1248B0',
    800: '#0D3688', 900: '#082560',
  },
  red: { 50: '#FEF2F2', 100: '#FEECF3', 500: '#EF4444', 600: '#DC2626', 700: '#B91C1C' },
  amber: { 50: '#FFF3CC', 100: '#FFEDD5', 500: '#F59E0B', 600: '#D97706', 800: '#874D00' },
  green: { 50: '#E0FCED', 100: '#D1FAE5', 500: '#10B981', 600: '#059669', 800: '#065F46' },
  lime: { 50: '#F4FBCB' },
  orange: { 50: '#FEEEE1', 500: '#F97516' },
  pink: { 50: '#FEECF3', 400: '#FA4B94' },
  purple: { 50: '#F3EEFF', 400: '#9B69FF' },
  cyan: { 50: '#E0F7FF', 400: '#00B9EB' },
} as const;

export const semantic = {
  text: {
    primary: colors.gray[800],
    secondary: colors.gray[600],
    muted: 'rgba(0, 0, 0, 0.55)',
    faint: 'rgba(0, 0, 0, 0.4)',
    inverse: '#FFFFFF',
    link: colors.blue[500],
  },
  surface: {
    page: '#FFFFFF',
    sidebar: colors.gray[50],
    subtle: 'rgba(0, 0, 0, 0.06)',
    muted: colors.gray[100],
    hover: colors.gray[150],
    active: colors.gray[200],
    selected: colors.blue[50],
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  border: {
    default: colors.gray[200],
    subtle: colors.gray[150],
    faint: 'rgba(0, 0, 0, 0.05)',
    focus: 'rgba(38, 109, 240, 0.32)',
    accent: colors.blue[500],
    error: colors.red[600],
  },
  accent: {
    primary: colors.blue[500],
    primaryHover: colors.blue[600],
    primarySubtle: colors.blue[50],
  },
} as const;

export const fontFamily = {
  sans: "Switzer, DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
} as const;

export const fontSize = {
  xs: '11px', sm: '12px', base: '14px', md: '16px',
  lg: '18px', xl: '20px', '2xl': '24px', '3xl': '28px', '4xl': '32px',
} as const;

export const fontWeight = { normal: '400', medium: '500', semibold: '600', bold: '700' } as const;

export const lineHeight = { none: '1', tight: '1.25', snug: '1.35', normal: '1.5' } as const;

export const spacing = {
  0: '0px', 0.5: '2px', 1: '4px', 1.5: '6px', 2: '8px', 2.5: '10px',
  3: '12px', 4: '16px', 5: '20px', 6: '24px', 8: '32px',
  10: '40px', 12: '48px', 16: '64px',
} as const;

export const radius = {
  sm: '4px', md: '6px', DEFAULT: '8px', lg: '9px', xl: '12px',
  '2xl': '16px', '3xl': '24px', full: '9999px',
} as const;

export const shadows = {
  border: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset',
  sm: 'rgba(28, 40, 64, 0.04) 0px 1px 2px 0px',
  md: 'rgba(255, 255, 255, 0) 0px 0px 0px 1px inset, rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(24, 41, 75, 0.04) 0px 1px 3px 0px',
  lg: 'rgba(28, 40, 64, 0.04) 0px 4px 8px -2px, rgba(28, 40, 64, 0.08) 0px 2px 4px -2px',
  xl: 'rgba(0, 0, 0, 0.04) 0px 12px 30px 0px, rgba(0, 0, 0, 0.08) 0px 4px 12px 0px',
  primaryBtn: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(38, 109, 240, 0.12) 0px 2px 4px -2px, rgba(38, 109, 240, 0.08) 0px 3px 6px -2px',
  focusRing: 'rgba(38, 109, 240, 0.32) 0px 0px 0px 2px',
  popover: 'rgba(0, 0, 0, 0.08) 0px 8px 24px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px',
  modal: 'rgba(0, 0, 0, 0.1) 0px 20px 50px 0px, rgba(0, 0, 0, 0.06) 0px 4px 16px 0px',
} as const;

export const duration = { fast: '100ms', normal: '160ms', moderate: '200ms', slow: '300ms' } as const;
export const easing = {
  default: 'cubic-bezier(0.2, 0, 0, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const zIndex = {
  dropdown: 1000, sticky: 1100, overlay: 1200, modal: 1300,
  popover: 1400, toast: 1500, tooltip: 1600,
} as const;

export const layout = {
  sidebarWidth: '275px',
  sidebarCollapsed: '52px',
  topbarHeight: '44px',
  detailPanelWidth: '460px',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const badgeColors = {
  amber: { bg: '#FFF3CC', text: '#874D00' },
  lime: { bg: '#F4FBCB', text: '#4D7C0F' },
  orange: { bg: '#FEEEE1', text: '#9A3412' },
  green: { bg: '#E0FCED', text: '#065F46' },
  gray: { bg: '#F8F9FA', text: '#505154' },
  blue: { bg: '#E5EEFF', text: '#0D3688' },
  purple: { bg: '#F3EEFF', text: '#6D28D9' },
  pink: { bg: '#FEECF3', text: '#9D174D' },
  red: { bg: '#FEF2F2', text: '#991B1B' },
  cyan: { bg: '#E0F7FF', text: '#0E7490' },
} as const;

export type BadgeColor = keyof typeof badgeColors;
