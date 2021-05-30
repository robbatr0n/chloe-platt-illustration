module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["open-sans", "sans-serif"],
        header: ["Amatic SC", "sans-serif"],
      },
      colors: {
        offpurple: ["#EAE4E4"],
        offpurpledark: ["#e3dada"],
        offblack: ["#121111"],
        offyellow: ["#E8E8CA"],
        offyellowdark: ["#e0e0c1"],
        offblue: ["#CADCE8"],
        offbluedark: ["#c1d4e0"],
      },
      fontSize: {
        big: "12rem",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover", "group-hover"],
      grayscale: ["hover", "group-hover"],
      brightness: ["hover", "group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
