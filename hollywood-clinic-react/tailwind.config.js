/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#d4af37', // Gold/Champagne
                    hover: '#b5952f',
                },
                background: {
                    dark: '#0a0a0a',
                    darker: '#050505',
                    card: 'rgba(25, 25, 25, 0.7)',
                },
                text: {
                    main: '#f5f5f5',
                    muted: '#a0a0a0',
                },
                accent: '#1ebd74', // Whatsapp Green
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['"Poppins"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
