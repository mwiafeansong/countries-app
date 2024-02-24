/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkModeElements: 'hsl(209, 23%, 22%)',

        darkModeBg: 'hsl(207, 26%, 17%)',
        darkModeShadow: 'hsl(207, 26%, 15%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeShadow: 'hsl(0, 0%, 80%)',
        lightModeBg: 'hsl(0, 0%, 98%)',
        darkModeTextLightModeElements: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
