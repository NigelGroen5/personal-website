/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(var(--color-black) / <alpha-value>)',
        grey: 'rgb(var(--color-grey) / <alpha-value>)',
        orange: 'rgb(var(--color-orange) / <alpha-value>)',
        lightGrey: 'rgb(var(--color-lightGrey) / <alpha-value>)',
        darkTeal: 'rgb(var(--color-darkTeal) / <alpha-value>)',
        lightTeal: 'rgb(var(--color-lightTeal) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Times New Roman', 'serif'],
        header: ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}


