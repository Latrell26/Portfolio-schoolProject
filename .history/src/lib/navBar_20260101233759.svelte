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
        }, 100);
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
            class={activeSection === "home" ? "underline" : ""}>Home</a
            >
        </li>

        <li class="hover:underline underline-offset-4 cursor-pointer">
            <a
            href="#about"
            on:click={hideNavbarAfterClick}
            class={activeSection === "about" ? "underline" : ""}>About</a
            >
        </li>

        <li class="hover:underline underline-offset-4 cursor-pointer">
            <a
            href="#projects"
            on:click={hideNavbarAfterClick}
            class={activeSection === "projects" ? "underline" : ""}>Projects</a
            >
        </li>

        <li class="hover:underline underline-offset-4 cursor-pointer">
            <a
            href="#contact"
            on:click={hideNavbarAfterClick}
            class={activeSection === "contact" ? "underline" : ""}>Contact</a
            >
        </li>
        </ul>

        <div class="flex items-center gap-4">
        <button on:click={toggleDark} class="px-3 py-1 border rounded"
            >Dark</button
        >
        <button class="md:hidden text-3xl" on:click={() => (menuOpen = !menuOpen)}
            >☰</button
        >
        </div>
    </div>
    </nav>

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
            on:click={() => {
            menuOpen = false;
            hideNavbarAfterClick();
            }}
            class={activeSection === "home" ? "underline" : ""}>Home</a
        >
        </li>

        <li>
        <a
            href="#about"
            on:click={() => {
            menuOpen = false;
            hideNavbarAfterClick();
            }}
            class={activeSection === "about" ? "underline" : ""}>About</a
        >
        </li>

        <li>
        <a
            href="#projects"
            on:click={() => {
            menuOpen = false;
            hideNavbarAfterClick();
            }}
            class={activeSection === "projects" ? "underline" : ""}>Projects</a
        >
        </li>

        <li>
        <a
            href="#contact"
            on:click={() => {
            menuOpen = false;
            hideNavbarAfterClick();
            }}
            class={activeSection === "contact" ? "underline" : ""}>Contact</a
        >
        </li>
    </ul>
    </div>
