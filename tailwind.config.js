/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '17px',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem'
      },
      screens: {
        // Mobile
        'sm': '375px',
        // Desktop
        '2xl': '1440px',
      },
    },
    colors: {
      //  Primary
      'Soft-orange': 'hsl(35, 77%, 62%)',
      'Soft-red': 'hsl(5, 85%, 63%)',

      // Neutral
      'Off-white': 'hsl(36, 100%, 99%)',
      'Grayish-blue': 'hsl(233, 8%, 79%)',
      'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'Very-dark-blue': 'hsl(240, 100%, 5%)',
    },
    screens: {
      // Mobile
      'sm': '375px',
      // Desktop
      '2xl': '1440px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}