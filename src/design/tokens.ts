// src/design/tokens.ts

export const tokens = {
  colors: {
    brand: {
      primary:    '#0F0E2A',  // Deep navy
      accent:     '#E63946',  // Kinetic red
      accentWarm: '#F4A261',  // Warm amber
      accentCool: '#1D9E75',  // Teal
    },
    neutral: {
      950: '#0A0A0F',
      900: '#111118',
      800: '#1E1E2A',
      700: '#2D2D3A',
      500: '#6B6B80',
      300: '#ADADBE',
      100: '#EDECEA',
      50:  '#F8F7F4',
      0:   '#FFFFFF',
    },
    semantic: {
      success: '#1D9E75',
      warning: '#F4A261',
      error:   '#E63946',
      info:    '#378ADD',
    },
  },
  typography: {
    display: { size: '5rem',     lineHeight: '1.05', weight: '800', font: 'var(--font-syne)' },
    h1:      { size: '3.5rem',   lineHeight: '1.1',  weight: '700', font: 'var(--font-syne)' },
    h2:      { size: '2.5rem',   lineHeight: '1.2',  weight: '700', font: 'var(--font-syne)' },
    h3:      { size: '1.75rem',  lineHeight: '1.3',  weight: '600', font: 'var(--font-inter)' },
    h4:      { size: '1.25rem',  lineHeight: '1.4',  weight: '600', font: 'var(--font-inter)' },
    bodyLg:  { size: '1.125rem', lineHeight: '1.7',  weight: '400', font: 'var(--font-inter)' },
    body:    { size: '1rem',     lineHeight: '1.7',  weight: '400', font: 'var(--font-inter)' },
    bodySm:  { size: '0.875rem', lineHeight: '1.6',  weight: '400', font: 'var(--font-inter)' },
    label:   { size: '0.75rem',  lineHeight: '1.5',  weight: '600', font: 'var(--font-inter)', letterSpacing: '0.1em' },
    quote:   { size: '1.375rem', lineHeight: '1.6',  weight: '400', font: 'var(--font-playfair)', style: 'italic' },
  },
  spacing: {
    sectionPaddingDesktop: '120px 0',
    sectionPaddingMobile:  '80px 0',
    containerMaxWidth:     '1280px',
    containerPaddingDesktop: '0 24px',
    containerPaddingMobile:  '0 16px',
    cardPaddingDesktop:    '40px',
    cardPaddingMobile:     '24px',
    cardRadius:            '16px',
    cardRadiusLg:          '24px',
    inputHeight:           '52px',
    buttonHeightLg:        '56px',
    buttonHeightMd:        '48px',
  },
}
