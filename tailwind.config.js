/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        lg: {max: '768px'},
        md: {max: '425px'},
        sm: {max: '375px'},
      }
    },
  },
  plugins: [],
}
