import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Research Quest Dark Theme
        dark: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#d4d4d4',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0f0f0f',
        },
        accent: {
          coral: '#00E5FF',
          coral_hover: '#6DEBFF',
          coral_light: '#A8F4FF',
        },
        primary: '#0f0f0f',
        secondary: '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-dx-lactos)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-magtis)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00E5FF 0%, #2CB8FF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
