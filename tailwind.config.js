/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF1F5',
          100: '#FBE2EB',
          200: '#F4B8CF',
          300: '#EA8AAF',
          400: '#E15690',
          DEFAULT: '#C81452',
          600: '#B30F49',
          700: '#970C3E',
          800: '#7A0932',
          900: '#560624',
        },
        secondary: {
          50: '#F2F3F6',
          100: '#DEE0E8',
          200: '#B7BBCB',
          DEFAULT: '#0B0E1A',
          700: '#0E1220',
          800: '#080A12',
          900: '#05060B',
        },
        paper: {
          DEFAULT: '#FAF8F4',
          dim: '#F3F0E9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      opacity: {
        6: '0.06',
        8: '0.08',
        15: '0.15',
        22: '0.22',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
