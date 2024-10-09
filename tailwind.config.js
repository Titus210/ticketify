/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all the files in the src directory for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F84464",  
        secondary: "#F7859A",
        background: "#1F1F1F",  
        surface: "#2D2D2D",  
        textPrimary: "#FFFFFF",
        textSecondary: "#BFBFBF",  
        scrollbarThumb: "#BA9BF4", 
        scrollbarTrack: "#6967D8"  
      },
      fontFamily: {
        body: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif',
        ],
        code: [
          'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace',
        ],
      },
    },
  },
  plugins: [],
};
