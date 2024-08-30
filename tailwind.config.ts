import { addIconSelectors } from '@iconify/tailwind'
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors(['emojione', 'ph']),
  ],
} satisfies Config;
