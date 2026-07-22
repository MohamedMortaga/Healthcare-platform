import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        brand: {
          navy: '#16324f',
          navyDark: '#3f6ea3',
          accent: '#1d4ed8',
          accentDark: '#8fb4ff',
          accentBg: '#e7f0ff',
          accentBgDark: '#16233d',
          cream: '#f7f5ef',
          bgDark: '#0b1220',
          surfaceDark: '#131b2c',
          border: '#eceada',
          borderDark: '#22304a',
          border2: '#e2e0d3',
          border2Dark: '#2a3a58',
          ink: '#101a26',
          inkDark: '#eef2f8',
          body: '#5b6b80',
          bodyDark: '#b7c3d6',
          muted: '#8a93a3',
          mutedDark: '#7e8ba3',
          midnight: '#0d2338'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
