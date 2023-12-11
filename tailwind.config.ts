import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto-mono)'],
      },
      colors: {
        primary: {
          foreground: 'var(--foreground-primary)',
        },
        secondary: {
          foreground: 'var(--foreground-secondary)',
        },
        tertiary: {
          DEFAULT: 'var(--background-tertiary)',
          foreground: 'var(--foreground-tertiary)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          quarternary: 'var(--accent-quaternary)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
          tertiary: 'var(--border-tertiary)',
        }
      },
      backgroundImage: {
        'primary': 'var(--background-primary)',
        'primary-reverse': 'var(--background-primary-reverse)',
        'secondary': 'var(--background-secondary)',
      },
      boxShadow: {
        'small-dark': '1px 1px 7px 0px rgba(0,0,0,0.6)',
        'medium-dark': '2px 2px 12px 0px rgba(0,0,0,0.71)',
        'medium-light': '3px 3px 3px 0px rgba(255,255,255,0.5)',
        'big-light': '3px 3px 5px 0px rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ['visited'],
    }
  }
}
export default config
