import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-google-sans)', 'sans-serif'],
        'google-sans': ['var(--font-google-sans)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.6s ease-out forwards',
        'slide-in-down': 'slide-in-down 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'bounce-in': 'bounce-in 0.7s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.6s ease-out 0.1s forwards',
        'fade-in-delay-2': 'fade-in 0.6s ease-out 0.2s forwards',
        'fade-in-delay-3': 'fade-in 0.6s ease-out 0.3s forwards',
        'fade-in-delay-4': 'fade-in 0.6s ease-out 0.4s forwards',
        'fade-in-delay-5': 'fade-in 0.6s ease-out 0.5s forwards',
        'fade-in-delay-6': 'fade-in 0.6s ease-out 0.6s forwards',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-up': {
          'from': { opacity: '0', transform: 'translateY(-50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-down': {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.8)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
