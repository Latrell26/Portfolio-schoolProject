<script>
  import { onMount } from "svelte";
  import viteLogo from "/vite.svg";

  // States
  let dark = false;
  let menuOpen = false;
  let scrolled = false;

  // Sticky Glass Nav
  let navRef;
  let showSticky = false;

  onMount(() => {
    // scroll shadow
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener("scroll", handleScroll);

    // intersection observer for sticky glass
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


<!-- TOP NORMAL NAV -->
<nav
  bind:this={navRef}
  class={`px-6 py-3 transition-all ${scrolled ? "shadow-lg" : ""}`}
>
  <div class="flex justify-between items-center">
    <h6 class="text-4xl font-semibold">LC</h6>

    <!-- Desktop Nav -->
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

      <img src={viteLogo} class="h-8" />

      <!-- Mobile Toggle -->
      <button
        class="md:hidden text-3xl"
        on:click={() => (menuOpen = !menuOpen)}
      >
        ☰
      </button>
    </div>
  </div>
</nav>


<!-- GLASS STICKY NAV -->
<nav
  class={`fixed top-0 left-0 right-0 z-50
  ${showSticky
    ? "translate-y-0 opacity-100 duration-500"
    : "-translate-y-full opacity-0 duration-0"}
  transition-all bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-xl`}
>
  <div class="flex justify-between items-center px-6 py-4">
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

      <img src={viteLogo} class="h-8" />

      <button
        class="md:hidden text-3xl"
        on:click={() => (menuOpen = !menuOpen)}
      >
        ☰
      </button>
    </div>
  </div>
</nav>


<!-- MOBILE MENU -->
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
