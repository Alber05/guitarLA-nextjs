/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg':
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/header.jpg')",
        'course-bg':
          'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7))'
      }
    }
  },
  plugins: []
}
