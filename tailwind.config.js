/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-green': '#00ff00',
                'secondary-green': '#00cc00',
                'dark-green': '#006600',
                'accent-blue': '#0080ff',
                'accent-red': '#ff0000',
                'accent-yellow': '#ffff00',
                'accent-purple': '#ff00ff',
                'accent-cyan': '#00ffff',
                'bg-black': '#000000',
                'bg-dark': '#111111',
                'bg-darker': '#0a0a0a',
            },
            fontFamily: {
                'pixel': ['"Press Start 2P"', 'cursive'],
            },
            animation: {
                'glitch': 'glitch 0.3s infinite',
                'typing': 'typing 3s steps(40, end)',
                'blink-caret': 'blink-caret 0.75s step-end infinite',
                'pixel-pulse': 'pixel-pulse 2s infinite',
                'scanlines': 'scanlines 0.1s linear infinite',
                'particle-float': 'particle-float 3s ease-in-out infinite',
            },
            keyframes: {
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                },
                'pixel-pulse': {
                    '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
                    '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' },
                },
                'particle-float': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(180deg)' },
                },
                scanlines: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(4px)' },
                },
            },
        },
    },
    plugins: [],
}
