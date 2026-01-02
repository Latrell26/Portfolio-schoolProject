    <script>
    import { onMount } from "svelte";

    let dark = false;
    let menuOpen = false;
    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
        scrolled = window.scrollY > 50;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function toggleDark() {
        dark = !dark;
        document.body.classList.toggle("dark-mode");
    }
    </script>


    <nav
    class={`fixed top-0 left-0 right-0 z-50 px-6 py-4
    transition-[background,backdrop-filter,box-shadow] duration-300
    bg-white/0 border-b border-white/0
    ${scrolled ? "bg-white/10 border-white/20 backdrop-blur-xl shadow-xl" : ""}`}
>


    <div class="flex justify-between items-center max">
        <h6 class="text-4xl font-semibold">LC</h6>

        <ul class="hidden md:flex gap-12 text-lg">
        <li class="hover:text-indigo-400 cursor-pointer">Home</li>
        <li class="hover:text-indigo-400 cursor-pointer">About</li>
        <li class="hover:text-indigo-400 cursor-pointer">Projects</li>
        <li class="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>

        <div class="flex items-center gap-4">
        <button on:click={toggleDark} class="px-3 py-1 border rounded">
            Dark
        </button>


        <button
            class="md:hidden text-3xl"
            on:click={() => (menuOpen = !menuOpen)}
        >
            ☰
        </button>
        </div>
    </div>
    </nav>


    <div
    class={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-xl text-white p-6 z-40 transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
    <button class="text-3xl mb-6" on:click={() => (menuOpen = false)}>
        ✕
    </button>

    <ul class="flex flex-col gap-6 text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
    </div>
