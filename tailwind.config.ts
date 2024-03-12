import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        "2": "2 2 0%",
        "4": "4 4 0%",
      },
      height: {
        full: "100vh",
      },
      width: {
        overFull: "150%",
      },
      gap: {
        medium: "50px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      loader: "Neue Montreal",
      sans: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    backgroundImage: {
      loaderBg: "url(/hero.jpg)",
      sprite: "url(/sprite.png)",
    },
    clipPath: {
      polygonn: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      secondPolygon: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      thirdPolygno: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
  },
  plugins: [require("tailwind-clip-path")],
};
export default config;
