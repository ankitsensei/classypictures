/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                wedding1: "url('https://wallpaperaccess.com/full/476336.jpg')",
                camerapic: "url('https://wallpapercave.com/wp/wp3629401.jpg')",
            },
            fontFamily: {
                sans: ['dancing-script', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
