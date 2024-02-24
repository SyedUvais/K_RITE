/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'background-1': "url('/NavBarImages/hero-bg-image (6).jpg')",
          'productimage':
          "url('/Productpageimages/producthero.png')",
          'about-us-bg-image':
          "url('/aboutPageImages/about-us/about-us.png')",
      },
    },
    screens: {
      'xxs' : '360',
      'xsm': '410px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
