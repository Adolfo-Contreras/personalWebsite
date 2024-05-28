/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#218380",//teal
        primaryd: "#145250",//dark slated grey
        primaryl: "#73D2DE",//non photo blue
        secondary: "#D81159",//rasberry
        secondaryd: "#8F2D56",//amaranth purple
        secondaryl: "#F1558E",//french rose
        contrast:"#FFBC42",//xanthous
        contrastl:"#FFCD70",//sunglow
        contrastd:"#F59F00",//gamboge
      },
    },
  },
  plugins: [],
};
