export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
  extend: {
    fontFamily: {
      sans: ['Lato', 'ui-sans-serif', 'system-ui'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.4rem' }],
      'lg': ['1.125rem', { lineHeight: '1.6rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
    },
    spacing: {
      '1.5': '0.375rem',
      '4.5': '1.125rem',
    }
  },
},
  plugins: [],
};
