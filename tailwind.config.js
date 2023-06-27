/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md' : '480px',
        'tablet' : '640px',
        'lg' : '768px',
        'laptop' : '1024px',
        'desktop' : '1232px',
        '3xl' : '1366px',
      },
    },
  },
  plugins: [],
}
