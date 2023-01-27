/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/neverland.png')",
      }
    },
  },
  plugins: [ require('tw-elements/dist/plugin')],
}
