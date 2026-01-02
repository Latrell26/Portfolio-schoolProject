    <script>
    import { onMount } from "svelte";
    import viteLogo from "/vite.svg";

    let navRef;
    let showSticky = false;

    onMount(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            showSticky = !entry.isIntersecting;
        },
        {
            threshold: 0,
            rootMargin: "-30px" 
        }
        );

        observer.observe(navRef);

        return () => observer.disconnect();
    });
    </script>

    <nav bind:this={navRef} class="px-6 py-0">
    <div class="flex justify-between items-center">
        <h6 class="text-4xl font-semibold">LC</h6>

        <ul class="flex gap-12 text-lg">
        <li class="hover:text-indigo-400 cursor-pointer">Home</li>
        <li class="hover:text-indigo-400 cursor-pointer">About</li>
        <li class="hover:text-indigo-400 cursor-pointer">Projects</li>
        <li class="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>

        <img src={viteLogo} class="h-10" />
    </div>
    </nav>

    <!-- GLASS STICKY NAV -->
    <nav
    class={`fixed top-0 left-0 right-0 z-50
    ${showSticky 
        ? "translate-y-0 opacity-100 duration-500" 
        : "-translate-y-full opacity-0 duration-0"
    }
    transition-all bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-xl`}
    >
    <div class="flex justify-between items-center px-6 py-4">
        <h6 class="text-4xl font-semibold">LC</h6>

        <ul class="flex gap-12 text-lg">
        <li class="hover:text-indigo-400 cursor-pointer">Home</li>
        <li class="hover:text-indigo-400 cursor-pointer">About</li>
        <li class="hover:text-indigo-400 cursor-pointer">Projects</li>
        <li class="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>

        <img src={viteLogo} class="h-10" />
    </div>
    </nav>
