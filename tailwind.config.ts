import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A3C5E',
          teal: '#0D9488',
          light: '#F0F4F8',
          mid: '#E2EBF4',
          dark: '#0F172A',
          darker: '#070E1A',
        },
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          muted: '#94A3B8',
          inverse: '#F8FAFC',
        },
        tg: {
          bg: '#0E1621',
          bubble: '#182533',
          outgoing: '#2B5278',
          header: '#17212B',
          border: '#0D1117',
          online: '#4AC660',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
