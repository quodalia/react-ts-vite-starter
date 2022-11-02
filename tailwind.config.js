module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/typography')],
};
