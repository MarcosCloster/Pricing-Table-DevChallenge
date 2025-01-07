/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // Asegúrate de que apunte al archivo correcto
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", 'serif']
      },
      fontSize: {
        min: '12px'
      },
      colors: {
        planName: '#263FA9',
        paymentTime: '#4D5562',
      }
    },
  },
  plugins: [],
};