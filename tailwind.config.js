/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi : ['Satoshi', 'sans-serif'],
        rubik : ['rubik', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1e88e5',
      }
    },
  },
  plugins: [],
};
