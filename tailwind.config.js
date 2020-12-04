module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#666666",
    },
    fontSize: {
      xs: "75rem",
      sm: ".85rem",
      base: "1rem",
      lg: "1.33rem",
      xl: "2rem",
    },
    screens: {
      xs: { max: "400px" },
      sm: "750px",
      md: "900px",
      lg: "1200px",
    },
    fontFamily: {
      heading: ["Times New Roman", "serif"],
      body: ["Helvetica", "Arial", "sans-serif"],
    },
    maxWidth: theme => {
      return {
        none: "none",
        ...theme("screens"),
      };
    },
    lineHeight: {
      1: 1,
      1.33: "1.33",
      1.5: "1.5",
    },
    transitionDuration: {
      166: "166ms",
      333: "333ms",
      666: "666ms",
    },
    extend: {
      width: {
        "1/4": "25%",
        "1/3": "33.33%",
        "1/2": "50%",
        "2/3": "66.67%",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
