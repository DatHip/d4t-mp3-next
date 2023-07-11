import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily : {
      rank : ["Roboto", "sans-serif"]
    },
    extend: {
       backgroundImage: {
        'miniplayer': 'var(--miniplayer-bg-img)',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      zm13: "1133px"
    },
    backgroundSize : {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      "main" : "1920px auto"
    }
  },
  plugins: [],
} satisfies Config;
