/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['templates/**/*.html'],
  theme: {
    extend: {},
    colors: {
      'admonition-note-light': '#fdfdfe',
      'admonition-note-dark': '#474748',
      'admonition-note-border': '#d4d5d8',
      'admonition-tip-light': '#e6f6e6',
      'admonition-tip-dark': '#003100',
      'admonition-tip-border': '#009400',
      'admonition-info-light': '#eef9fd',
      'admonition-info-dark': '#193c47',
      'admonition-info-border': '#4cb3d4',
      'admonition-caution-light': '#fff8e6',
      'admonition-caution-dark': '#4d3800',
      'admonition-caution-border': '#e6a700',
      'admonition-danger-light': '#ffebec',
      'admonition-danger-dark': '#4b1113',
      'admonition-danger-border': '#e13238',
    }
  },
  plugins: [],
  darkMode: 'class',
}
