<script>
    import { onMount } from "svelte";

    let dark = false;
    let menuOpen = false;
    let scrolled = false;
    let activeSection = "home";

    let prevScrollY = 0;
    let navbarVisible = true;

    let forceHide = false;

    function toggleDark() {
        dark = !dark;
        document.body.classList.toggle("dark-mode");
    }

    function hideNavbarAfterClick() {
        forceHide = true;
        navbarVisible = false;

        setTimeout(() => {
            forceHide = false;
        }, 1200);
    }

    onMount(() => {
        const handleScroll = () => {

            if (forceHide) return;

            const currentScrollY = window.scrollY;

            scrolled = currentScrollY > 50;

            if (currentScrollY > prevScrollY && currentScrollY > 100) {
                navbarVisible = false;
            } else if (currentScrollY < prevScrollY) {
                navbarVisible = true;
            }

            if (currentScrollY <= 10 && !forceHide) {
            navbarVisible = true;
}

            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    });
   

    let isDark = false;

    // SVG Icons
    const sunIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    `;

    const moonIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    `;

    // Current icon (reactive)
    let currentIcon = sunIcon;

    function toggleDarkMode() {
        isDark = !isDark;
        document.body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('darkMode', isDark);

        // Update icon after animation
        setTimeout(() => {
            currentIcon = isDark ? moonIcon : sunIcon;
        }, 250);
    }

    // Load saved preference on mount
    onMount(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            isDark = saved === 'true';
        } else {
            // Optional: detect system preference
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (isDark) {
            document.body.classList.add('dark-mode');
            currentIcon = moonIcon;
        }
    });
</script>

<nav
    class={`fixed top-0 left-0 right-0 z-50 py-2
    transition-all duration-300 ease-out
    bg-white/0 border-b border-white/0
    ${scrolled ? "bg-white/10 border-white/20 backdrop-blur-xl shadow-md" : ""}
    ${navbarVisible ? "translate-y-0" : "-translate-y-full"}`}
>
    <div class="flex justify-between items-center max-w-300 mx-auto px-4">
        <h5 class="font-semibold">LC</h5>

        <ul class="hidden md:flex gap-12 text-lg">
            <li class="hover:underline underline-offset-4 cursor-pointer">
                <a 
                    href="#home" 
                    on:click={hideNavbarAfterClick}
                    class={activeSection === "home" ? "underline" : ""}
                >Home</a>
            </li>

            <li class="hover:underline underline-offset-4 cursor-pointer">
                <a 
                    href="#about" 
                    on:click={hideNavbarAfterClick}
                    class={activeSection === "about" ? "underline" : ""}
                >About</a>
            </li>

            <li class="hover:underline underline-offset-4 cursor-pointer">
                <a 
                    href="#projects" 
                    on:click={hideNavbarAfterClick}
                    class={activeSection === "projects" ? "underline" : ""}
                >Projects</a>
            </li>

            <li class="hover:underline underline-offset-4 cursor-pointer">
                <a 
                    href="#contact" 
                    on:click={hideNavbarAfterClick}
                    class={activeSection === "contact" ? "underline" : ""}
                >Contact</a>
            </li>
        </ul>

       <button
    on:click={toggleDarkMode}
    class="relative w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow-lg"
    aria-label="Toggle dark mode"
>
    <div
        class="w-12 h-10 relative rounded-full transition-all duration-500 transform p-1 text-white flex items-center justify-center
               {isDark ? 'bg-gray-700 translate-x-full' : 'bg-yellow-500 -translate-x-2'}"
    >
        {@html currentIcon}
    </div>
</button>
    </div>
</nav>

<!-- Mobile Menu -->
<div
    class={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-xl text-white p-6 z-40 
    transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>
    <button class="text-3xl mb-6" on:click={() => (menuOpen = false)}>✕</button>

    <ul class="flex flex-col gap-6 text-xl">
        <li>
            <a 
                href="#home" 
                on:click={() => { menuOpen = false; hideNavbarAfterClick(); }}
                class={activeSection === "home" ? "underline" : ""}
            >Home</a>
        </li>

        <li>
            <a 
                href="#about" 
                on:click={() => { menuOpen = false; hideNavbarAfterClick(); }}
                class={activeSection === "about" ? "underline" : ""}
            >About</a>
        </li>

        <li>
            <a 
                href="#projects" 
                on:click={() => { menuOpen = false; hideNavbarAfterClick(); }}
                class={activeSection === "projects" ? "underline" : ""}
            >Projects</a>
        </li>

        <li>
            <a 
                href="#contact" 
                on:click={() => { menuOpen = false; hideNavbarAfterClick(); }}
                class={activeSection === "contact" ? "underline" : ""}
            >Contact</a>
        </li>
    </ul>
</div>
