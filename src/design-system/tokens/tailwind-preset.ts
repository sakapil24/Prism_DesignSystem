/**
 * CRM Design System Example — Tailwind CSS v4 Preset
 * Reverse-engineered from sample CRM product UI
 *
 * Usage with Tailwind v4 (CSS-first config):
 *   In your main CSS file:
 *     @import 'tailwindcss';
 *     @import './tokens/tokens.css';
 *
 * This file provides a JS preset for Tailwind v3 compatibility
 * or tooling that needs a JS config object.
 */

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',

  gray: {
    50: '#FBFBFB',
    100: '#F8F9FA',
    150: '#EEEFF1',
    200: '#E6E7EA',
    300: '#CDCFD1',
    400: '#A0A2A6',
    500: '#808184',
    600: '#505154',
    700: '#3A3B3E',
    800: '#242529',
    900: '#1A1B1E',
  },

  blue: {
    50: '#E5EEFF',
    100: '#D6E5FF',
    200: '#A8C8FF',
    300: '#6EA0F7',
    400: '#4A85F2',
    500: '#266DF0',
    600: '#1A5AD4',
    700: '#1248B0',
    800: '#0D3688',
    900: '#082560',
  },

  red: {
    50: '#FEF2F2',
    100: '#FEECF3',
    200: '#FDDDE6',
    300: '#FCA5B8',
    400: '#F86E8A',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },

  amber: {
    50: '#FFF3CC',
    100: '#FFEDD5',
    200: '#FFE4B8',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#874D00',
    900: '#6B3A00',
  },

  green: {
    50: '#E0FCED',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },

  lime: {
    50: '#F4FBCB',
    100: '#ECFCCB',
    200: '#D9F99D',
    300: '#BEF264',
    400: '#A3E635',
    500: '#84CC16',
  },

  orange: {
    50: '#FEEEE1',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97516',
  },

  pink: {
    50: '#FEECF3',
    100: '#FCE7F3',
    200: '#FBCFE8',
    300: '#F9A8D4',
    400: '#FA4B94',
    500: '#EC4899',
  },

  purple: {
    50: '#F3EEFF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#9B69FF',
    500: '#8B5CF6',
  },

  cyan: {
    50: '#E0F7FF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#00B9EB',
    500: '#06B6D4',
  },
} as const;

const fontSize = {
  xs: ['11px', { lineHeight: '1.35' }],
  sm: ['12px', { lineHeight: '1.5' }],
  base: ['14px', { lineHeight: '1.5' }],
  md: ['16px', { lineHeight: '1.5' }],
  lg: ['18px', { lineHeight: '1.5' }],
  xl: ['20px', { lineHeight: '1.25' }],
  '2xl': ['24px', { lineHeight: '1.25' }],
  '3xl': ['28px', { lineHeight: '1.25' }],
  '4xl': ['32px', { lineHeight: '1.25' }],
} as const;

const spacing = {
  '0': '0px',
  '0.5': '2px',
  '1': '4px',
  '1.5': '6px',
  '2': '8px',
  '2.5': '10px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
  '10': '40px',
  '12': '48px',
  '16': '64px',
  '20': '80px',
} as const;

const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '6px',
  DEFAULT: '8px',
  lg: '9px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const;

const boxShadow = {
  none: 'none',
  border: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset',
  sm: 'rgba(28, 40, 64, 0.04) 0px 1px 2px 0px',
  md: 'rgba(255, 255, 255, 0) 0px 0px 0px 1px inset, rgba(28, 40, 64, 0.18) 0px 0px 2px 0px, rgba(24, 41, 75, 0.04) 0px 1px 3px 0px',
  lg: 'rgba(28, 40, 64, 0.04) 0px 4px 8px -2px, rgba(28, 40, 64, 0.08) 0px 2px 4px -2px',
  xl: 'rgba(0, 0, 0, 0.04) 0px 12px 30px 0px, rgba(0, 0, 0, 0.08) 0px 4px 12px 0px',
  'primary-btn': 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(38, 109, 240, 0.12) 0px 2px 4px -2px, rgba(38, 109, 240, 0.08) 0px 3px 6px -2px',
  'focus-ring': 'rgba(38, 109, 240, 0.32) 0px 0px 0px 2px',
  popover: 'rgba(0, 0, 0, 0.08) 0px 8px 24px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px',
  modal: 'rgba(0, 0, 0, 0.1) 0px 20px 50px 0px, rgba(0, 0, 0, 0.06) 0px 4px 16px 0px',
} as const;

const zIndex = {
  hide: '-1',
  base: '0',
  raised: '1',
  dropdown: '1000',
  sticky: '1100',
  overlay: '1200',
  modal: '1300',
  popover: '1400',
  toast: '1500',
  tooltip: '1600',
  'command-palette': '1700',
} as const;

export const crmPreset = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors,
    fontFamily: {
      sans: ['Switzer', '"DM Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
    },
    fontSize,
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.35',
      normal: '1.5',
      relaxed: '1.625',
    },
    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.05em',
    },
    spacing,
    borderRadius,
    boxShadow,
    zIndex,
    transitionDuration: {
      fast: '100ms',
      normal: '160ms',
      moderate: '200ms',
      slow: '300ms',
      slower: '400ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.2, 0, 0, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    extend: {
      width: {
        sidebar: '275px',
        'sidebar-collapsed': '52px',
        'sidebar-mobile': '260px',
        'detail-panel': '460px',
      },
      height: {
        topbar: '44px',
        'topbar-mobile': '48px',
        'bottom-nav': '56px',
        'touch-target': '44px',
        'btn-sm': '24px',
        'btn-md': '28px',
        'btn-lg': '32px',
        'btn-xl': '36px',
        'input-sm': '28px',
        'input-md': '32px',
        'input-lg': '36px',
        'nav-item': '28px',
        badge: '22px',
        'table-row': '36px',
        'table-row-compact': '32px',
      },
      minHeight: {
        'touch-target': '44px',
      },
      minWidth: {
        'touch-target': '44px',
      },
      maxWidth: {
        content: '1200px',
        'modal-sm': '400px',
        'modal-md': '520px',
        'modal-lg': '640px',
        'modal-xl': '780px',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 160ms cubic-bezier(0.2, 0, 0, 1)',
        fadeOut: 'fadeOut 100ms cubic-bezier(0.2, 0, 0, 1)',
        slideDown: 'slideDown 200ms cubic-bezier(0.2, 0, 0, 1)',
        slideUp: 'slideUp 200ms cubic-bezier(0.2, 0, 0, 1)',
        scaleIn: 'scaleIn 200ms cubic-bezier(0.2, 0, 0, 1)',
        slideInRight: 'slideInRight 300ms cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
};

export default crmPreset;
