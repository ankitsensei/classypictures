/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                wedding1: "url('./assets/pics/wedding1.jpg')",
            },
        },
    },
    plugins: [],
};
