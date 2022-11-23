/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,svelte}"], theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
