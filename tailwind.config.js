/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#1e3a8a',
          secondary: '#10b981',
          customGray: '#64748b',
        },
      },
    },
    plugins: [],
  };
  