    <script>
    import { onMount } from "svelte";
    import viteLogo from "/vite.svg";

    let dark = false;
    let menuOpen = false;
    let scrolled = false;
    let activeSection = "home";

    // Scroll and sticky nav
    onMount(() => {
        const handleScroll = () => {
        scrolled = window.scrollY > 50;
        };
        window.addEventListener("scroll", handleScroll);

        // IntersectionObserver para sa active section
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

        sections.forEach(sec => observer.observe(sec));

        return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
        };
    });

    function toggleDark() {
        dark = !dark;
        document.body.classList.toggle("dark-mode");
    }
    </script>

    <!-- NAVBAR -->
    <nav
    class={`fixed top-0 left-0 right-0 z-50 px-6 py-4
    transition-[background,backdrop-filter,box-shadow] duration-300
    bg-white/0 border-b border-white/0
    ${scrolled ? "bg-white/10 border-white/20 backdrop-blur-xl shadow-md" : ""}`}
    >
    <div class="flex justify-between items-center max-w-300 mx-auto">
        <h6 class="text-4xl font-semibold">LC</h6>

        <ul class="hidden md:flex gap-12 text-lg">
        <li class="hover:underline cursor-pointer">
            <a href="#home" class={activeSection === "home" ? "underline " : ""}>Home</a>
        </li>
        <li class="hover:underline cursor-pointer">
            <a href="#about" class={activeSection === "about" ? "underline " : ""}>About</a>
        </li>
        <li class="hover:underline cursor-pointer">
            <a href="#projects" class={activeSection === "projects" ? "underline " : ""}>Projects</a>
        </li>
        <li class="hover:underline cursor-pointer">
            <a href="#contact" class={activeSection === "contact" ? "underline " : ""}>Contact</a>
        </li>
        </ul>

        <!-- Right controls -->
        <div class="flex items-center gap-4">
        <button on:click={toggleDark} class="px-3 py-1 border rounded">Dark</button>

        <button class="md:hidden text-3xl" on:click={() => (menuOpen = !menuOpen)}>
            ☰
        </button>
        </div>
    </div>
    </nav>

    <!-- mobile-->
    <div
    class={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-xl text-white p-6 z-40 transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
    <button class="text-3xl mb-6" on:click={() => (menuOpen = false)}>✕</button>
    <ul class="flex flex-col gap-6 text-xl">
        <li><a href="#home" class={activeSection === "home" ? "underline " : ""}>Home</a></li>
        <li><a href="#about" class={activeSection === "about" ? "underline " : ""}>About</a></li>
        <li><a href="#projects" class={activeSection === "projects" ? "underline " : ""}>Projects</a></li>
        <li><a href="#contact" class={activeSection === "contact" ? "underline " : ""}>Contact</a></li>
    </ul>
    </div>
