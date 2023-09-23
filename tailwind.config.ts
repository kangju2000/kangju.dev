import { pxToRemTailwind } from './src/styles/spacing'

import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
    },
  },
  plugins: [],
}
export default config
