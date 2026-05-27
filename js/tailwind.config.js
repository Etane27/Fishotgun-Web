tailwind.config = {
  theme: {
    extend: {
      colors: {
        leaf: { 50: "#f1fae8", 100: "#dbf2be", 200: "#b5e47e", 300: "#88d04a", 400: "#64be3c", 500: "#4a9c28", 600: "#347a1a" },
        bell: { 50: "#fffce8", 100: "#fff5c0", 200: "#ffe880", 300: "#ffd740", 400: "#ffc010", 500: "#e8a400", 600: "#c48400" },
        river: { 50: "#edfaff", 100: "#d0f0fc", 200: "#a2e2f8", 300: "#60cdf2", 400: "#2bb6e6", 500: "#119ed0", 600: "#0f83ad" },
        nook: "#FEF5DC",
        sand: "#EED88A",
        soil: "#4B311A",
        bark: "#B3773C",
        pond: "#D7F4FF"
      },
      boxShadow: {
        cozy: "0 28px 70px rgba(75, 49, 26, 0.16)",
        card: "0 18px 36px rgba(75, 49, 26, 0.14)",
        button: "0 5px 0 rgba(52, 122, 26, 0.85)"
      },
      fontFamily: {
        display: ["Fredoka", "Trebuchet MS", "sans-serif"],
        body: ["Nunito", "Verdana", "sans-serif"]
      }
    }
  }
};
