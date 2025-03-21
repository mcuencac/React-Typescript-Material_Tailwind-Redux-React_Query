import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customAmber: '#db236d',
      },
      fontFamily: {
        'domine': ['Domine', 'serif'], 
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
