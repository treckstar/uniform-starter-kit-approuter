module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {
      width: {
        "screen-xl": "1280px",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    darkTheme: 'dim',
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: ['retro', 'dim', 'sunset'],
  },
};
 