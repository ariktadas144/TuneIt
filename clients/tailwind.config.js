module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)"
        },
        header: {
          text1: "var(--header-text-1)",
          text2: "var(--header-text-2)"
        },
        customBg: "#040C28" // ✅ Add this line
      },
      fontFamily: {
        'inria': ['Inria Sans', 'sans-serif'],
        'inknut': ['Inknut Antiqua', 'serif']
      }
    }
  },
  plugins: []
};
