<script>
import { onMount } from "svelte";
    import viteLogo from "/vite.svg";
    let prevScrollY = 0;
    let navbarVisible = true;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;

            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 100) {
                navbarVisible = false;
            } else if (currentScrollY < prevScrollY) {
                navbarVisible = true;
            }

            if (currentScrollY <= 10) {
                navbarVisible = true;
            }

            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);


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
    <div class="flex justify-between items-center max-w-300 mx-auto">
        <h5 class=" font-semibold">LC</h5>

        <ul class="hidden md:flex gap-12 text-lg">
        <li class="hover:underline underline-offset-4 cursor-pointer">
            <a href="#home" class={activeSection === "home" ? "underline " : ""}>Home</a>
        </li>
        <li class="hover:underline underline-offset-4 cursor-pointer">
            <a href="#about" class={activeSection === "about" ? "underline " : ""}>About</a>
        </li>
        <li class="hover:underline underline-offset-4 cursor-pointer">
            <a href="#projects" class={activeSection === "projects" ? "underline " : ""}>Projects</a>
        </li>
        <li class="hover:underline z cursor-pointer">
            <a href="#contact" class={activeSection === "contact" ? "underline " : ""}>Contact</a>
        </li>
        </ul>

        <div class="flex items-center gap-4">
        <button on:click={toggleDark} class="px-3 py-1 border rounded">Dark</button>

        <button class="md:hidden text-3xl" on:click={() => (menuOpen = !menuOpen)}>
            ☰
        </button>
        </div>
    </div>
    </nav>

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
