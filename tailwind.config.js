module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'sm': {'max': '639px'},      // Mobile
            'md': {'min': '640px', 'max': '1023px'}, // Tablet
            'lg': {'min': '1024px'},     // Desktop
        },
    },
    plugins: [],
}