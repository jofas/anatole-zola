/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['templates/**/*.html'],
  theme: {
    extend: {},
    colors: {
      'admonition-tip-light': '#e6f6e6',
      'admonition-tip-border-light': '#009400',
      'admonition-tip-dark': '#003100',
      'admonition-tip-border-dark': '#009400',
    }
  },
  plugins: [],
  darkMode: 'class',
}
