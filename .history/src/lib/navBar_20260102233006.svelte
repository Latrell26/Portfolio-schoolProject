<script>
  import { onMount } from "svelte";

  let isDark = false;
  let currentIcon;
  let menuOpen = false;
  let scrolled = false;
  let activeSection = "home";

  let prevScrollY = 0;
  let navbarVisible = true;
  let forceHide = false;

  const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3
               m15.364 6.364l-.707-.707
               M6.343 6.343l-.707-.707
               m12.728 0l-.707.707
               M6.343 17.657l-.707.707
               M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  `;

  const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646
               9.003 9.003 0 0012 21
               a9.003 9.003 0 008.354-5.646z"/>
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

  function hideNavbarAfterClick() {
    forceHide = true;
    navbarVisible = false;
    setTimeout(() => forceHide = false, 1200);
  }

  onMount(() => {
    const saved = localStorage.getItem("darkMode");
    isDark = saved !== null
      ? saved === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyDarkMode(isDark);

    const handleScroll = () => {
      if (forceHide) return;

      const currentScrollY = window.scrollY;
      scrolled = currentScrollY > 50;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        navbarVisible = false;
      } else if (currentScrollY < prevScrollY) {
        navbarVisible = true;
      }

      if (currentScrollY <= 10) navbarVisible = true;
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeSection = entry.target.id;
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
</script>

<nav class={`fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300 ease-out
    bg-transparent ${scrolled ? "bg-white/10 border-b border-white/20 backdrop-blur-xl shadow-md" : "border-b border-transparent"}
    ${navbarVisible ? "translate-y-0" : "-translate-y-full"}`}>
  <div class="flex justify-between items-center max-w-7xl mx-auto px-4">
    <h5 class="font-semibold">LC</h5>

    <ul class="hidden md:flex gap-12 text-lg">
      {#each ["home","about","education","projects","contact"] as item}
        <li class="hover:underline underline-offset-4">
          <a href={`#${item}`} on:click={hideNavbarAfterClick}
             class={activeSection === item ? "underline" : ""}>
            {item[0].toUpperCase() + item.slice(1)}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Mobile hamburger/X -->
    <button class="md:hidden text-3xl font-bold z-50" on:click={() => menuOpen = !menuOpen}>
      {#if menuOpen} ✕ {:else} ☰ {/if}
    </button>

    <button
      on:click={toggleDarkMode}
      class="hidden md:flex relative w-14 h-7 rounded-full bg-white shadow-md flex items-center cursor-pointer"
    >
      <div class="w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center text-white
                  {isDark ? 'bg-dark translate-x-7' : 'bg-yellow-500 translate-x-0'}">
        {@html currentIcon}
      </div>
    </button>
  </div>
</nav>

<div
  class={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-xl text-white p-6 z-40
    transition-transform duration-300 pt-20 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <button
    on:click={toggleDarkMode}
    class="relative w-14 h-7 rounded-full bg-white shadow-md flex items-center cursor-pointer mb-6 z-50"
  >
    <div class="w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center text-white
           {isDark ? 'bg-dark translate-x-7' : 'bg-yellow-500 translate-x-0'}">
      {@html currentIcon}
    </div>
  </button>

  <ul class="flex flex-col gap-6 text-xl">
    {#each ["home","about","education","projects","contact"] as item}
      <li>
        <a href={`#${item}`} on:click={() => { menuOpen = false; hideNavbarAfterClick(); }}
           class={activeSection === item ? "underline" : ""}>
          {item[0].toUpperCase() + item.slice(1)}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  :global(.dark-mode) {
    --dark: #0B0B0B;
    --light: #F2F2F7;
    background-color: var(--dark);
    color: var(--light);
  }
</style>
