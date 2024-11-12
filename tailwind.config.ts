import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(192, 229, 252, 0.96) 0%, rgba(192, 229, 252, 0.83) 100%)',
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        noto: ['"Noto Sans Devanagari"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },


    
  },
  plugins: [],
} satisfies Config;
