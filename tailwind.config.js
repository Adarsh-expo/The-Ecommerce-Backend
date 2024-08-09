/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-image': "url('https://cdn.shopify.com/s/files/1/0578/3398/0097/files/EN_VENUM_COM_SUMMER-SALE-2024_960x1200y_1.jpg?v=1719391670')",
      },
    },
  },
  plugins: [],
}