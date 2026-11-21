/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--rgb-primary) / <alpha-value>)',
        secondary: 'rgb(var(--rgb-secondary) / <alpha-value>)',
        accent: 'rgb(var(--rgb-accent) / <alpha-value>)',
        'secondary-muted': 'rgb(var(--rgb-secondary-muted) / <alpha-value>)',
        'primary-muted': 'rgb(var(--rgb-primary-muted) / <alpha-value>)',
        'primary-faint': 'rgb(var(--rgb-primary-faint) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}