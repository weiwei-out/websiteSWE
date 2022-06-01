module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red1: "#FB4D4D",
        red2: "#DF4444",
        red3: "#AA3232",
        red4: "#8A2525",
        white: "#FFFFFF",
        bg1: "#121D26",
        bg2: "#192631",
      },
      width: {
        sideBar: "var(--sideBar)",
      },
      height: {
        sideBar: "var(--sideBar)",
        large: "100vh",
      },
    },
  },
  plugins: [],
};
