export const darkMode = 'class';
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
];

export const theme = {
  extend: {
    scrollBehavior: ['responsive'],
    keyframes: {
      'scale-up': {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '100%': { transform: 'scale(1.1)', opacity: '0.9' },
      },
    },
    animation: {
      'scale-up': 'scale-up 0.3s ease-in-out',
    },
    fontFamily: { // Corrected this line
      inter: ['Inter', 'sans-serif'],
    },
  },
};

export const safelist = [ // Moved safelist outside theme object
  'animate-[scale-up_0.3s_ease-in-out]',
];

export const plugins = [
  // eslint-disable-next-line no-undef
  require('flowbite/plugin')
];
