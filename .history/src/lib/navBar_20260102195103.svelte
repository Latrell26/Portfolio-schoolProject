<script>
    import { onMount } from "svelte";

    let isDark = false;
    let currentIcon;

    const sunIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707
                     M6.343 6.343l-.707-.707m12.728 0l-.707.707
                     M6.343 17.657l-.707.707
                     M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    `;

    const moonIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646
                     A9.003 9.003 0 0012 21
                     a9.003 9.003 0 008.354-5.646z" />
        </svg>
    `;

    function applyDarkMode(value) {
        document.documentElement.classList.toggle("dark-mode", value);
        localStorage.setItem("darkMode", value);
        currentIcon = value ? moonIcon : sunIcon;
    }

    function toggleDarkMode() {
        isDark = !isDark;
        applyDarkMode(isDark);
    }

    onMount(() => {
        const saved = localStorage.getItem("darkMode");

        isDark = saved !== null
            ? saved === "true"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;

        applyDarkMode(isDark);
    });
</script>
