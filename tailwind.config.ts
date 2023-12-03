import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: colors.gray,
        secondary: colors.amber,
        'btn-primary': colors.blue,
        'btn-secondary': colors.violet,
        'btn-danger': colors.red,
      },
    },
  },
  plugins: [],
};
export default config;
