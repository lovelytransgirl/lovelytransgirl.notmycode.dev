/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'white',
            h1: {
              color: 'rgb(192, 132, 252)',
            },
            h2: {
              color: 'rgb(192, 132, 252)',
            },
            h3: {
              color: 'rgb(192, 132, 252)',
            },
            strong: {
              color: 'rgb(216, 180, 254)',
            },
            a: {
              color: 'rgb(192, 132, 252)',
              '&:hover': {
                color: 'rgb(216, 180, 254)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwindcss')({
      defaultFlavour: "macchiato"
    }),
  ],
};
