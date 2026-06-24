/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		// Keep dynamic classes that might be generated
		'bg-primary-color',
		'text-primary-color',
		'border-primary-color',
		'hover:bg-primary-color',
		'bg-secondary-color',
		'text-secondary-color',
		'border-secondary-color',
		'hover:bg-secondary-color',
		'bg-secondary-light-color',
		'text-secondary-light-color',
		'border-secondary-light-color',
		'hover:bg-secondary-light-color',
		'bg-tertiary-color',
		'text-tertiary-color',
		'border-tertiary-color',
		'hover:bg-tertiary-color',
		'bg-tertiary-light-color',
		'text-tertiary-light-color',
		'border-tertiary-light-color',
		'hover:bg-tertiary-light-color',
		// Animation classes
		'animate-fade-in-up',
		'animate-slide-in',
		'animate-pulse',
		// Swiper classes
		'swiper',
		'swiper-slide',
		'swiper-pagination',
		'swiper-pagination-bullet',
		'swiper-pagination-bullet-active',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
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
				'primary-color': '#663399',
				'primary-light-color': '#7953A9',
				'secondary-color': '#22277A',
				'secondary-light-color': '#4066E0',
				'tertiary-color': '#8B74BD',
				'tertiary-light-color': '#B9BFFF',
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
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				},
				'background-position-spin': {
					'0%': {
						backgroundPosition: 'top center'
					},
					'100%': {
						backgroundPosition: 'bottom center'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				'background-position-spin': 'background-position-spin 3000ms infinite alternate',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'slide-in': 'slide-in 0.4s ease-out'
			},
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1400px'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

