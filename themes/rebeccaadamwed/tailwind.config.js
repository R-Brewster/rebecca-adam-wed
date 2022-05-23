module.exports = {
  content: ["./**/*.php"],
  theme: {
    screens: {
      'medium': '641px',
      // => @media (min-width: 641px) { ... }

      'xmedium': '769px',
      // => @media (min-width: 769px) { ... }

      'large': '1025px',
      // => @media (min-width: 1025px) { ... }
    },
    colors: {
      'red': '#640D14',
      'blue': '#0A1128',
      'pink': '#A05F5D',
    },
    fontFamily: {
      tower: ['high-tower-text', 'serif'],
      edwardian: ['edwardian-script', 'cursive'],
    },
  },
  plugins: [
    
  ],
}
