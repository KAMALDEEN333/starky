import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			'fade-in-up': {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-down': {
  				'0%': { opacity: '0', transform: 'translateY(-20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-left': {
  				'0%': { opacity: '0', transform: 'translateX(-20px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'fade-in-right': {
  				'0%': { opacity: '0', transform: 'translateX(20px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'slide-in-up': {
  				'0%': { transform: 'translateY(100%)' },
  				'100%': { transform: 'translateY(0)' }
  			},
  			'slide-in-down': {
  				'0%': { transform: 'translateY(-100%)' },
  				'100%': { transform: 'translateY(0)' }
  			},
  			'scale-in': {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			'bounce-in': {
  				'0%': { opacity: '0', transform: 'scale(0.3)' },
  				'50%': { opacity: '1', transform: 'scale(1.05)' },
  				'70%': { transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'glow': {
  				'0%, 100%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.5)' },
  				'50%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.8)' }
  			},
  			'shimmer': {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' }
  			},
  			'ticker-scroll': {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out',
  			'fade-in-up': 'fade-in-up 0.6s ease-out',
  			'fade-in-down': 'fade-in-down 0.6s ease-out',
  			'fade-in-left': 'fade-in-left 0.6s ease-out',
  			'fade-in-right': 'fade-in-right 0.6s ease-out',
  			'slide-in-up': 'slide-in-up 0.6s ease-out',
  			'slide-in-down': 'slide-in-down 0.6s ease-out',
  			'scale-in': 'scale-in 0.5s ease-out',
  			'bounce-in': 'bounce-in 0.8s ease-out',
  			'float': 'float 3s ease-in-out infinite',
  			'glow': 'glow 2s ease-in-out infinite',
  			'shimmer': 'shimmer 2s linear infinite',
  			'ticker-scroll': 'ticker-scroll 30s linear infinite',
  			'fade-in-delay-100': 'fade-in-up 0.6s ease-out 0.1s both',
  			'fade-in-delay-200': 'fade-in-up 0.6s ease-out 0.2s both',
  			'fade-in-delay-300': 'fade-in-up 0.6s ease-out 0.3s both',
  			'fade-in-delay-400': 'fade-in-up 0.6s ease-out 0.4s both',
  			'fade-in-delay-500': 'fade-in-up 0.6s ease-out 0.5s both',
  			'fade-in-delay-600': 'fade-in-up 0.6s ease-out 0.6s both'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
