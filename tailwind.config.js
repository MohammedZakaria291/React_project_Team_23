/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#13B7C7',
          hover: '#0FA0AE',
          dark: '#0D8994',
        },
        secondary: {
          DEFAULT: '#13B7C7',
        },
        ink: '#16222B',
        academic: {
          bg: '#f8fafc',
          card: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
