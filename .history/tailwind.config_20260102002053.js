    export default {
        darkMode: 'class', // important!
    content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
    theme: {
        extend: {
        colors: {
            primary: 'var(--primary)',
            dark: 'var(--dark)',
            medyolight: 'var(--medyolight)',
            light: 'var(--light)',
            brown: 'var(--brown)',
        },
        },
    },
    plugins: [],
    };
