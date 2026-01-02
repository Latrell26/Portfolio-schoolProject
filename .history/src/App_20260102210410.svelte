<script>
  import { onMount } from "svelte";

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<!-- Burger Button -->
<button
  class="md:hidden relative w-8 h-8 flex flex-col justify-between items-center"
  on:click={toggleMenu}
  aria-label="Toggle menu"
>
  <span
    class="block h-1 w-full bg-dark rounded transition-transform duration-300"
    class:rotate-45={menuOpen}
    class:translate-y-3={menuOpen}
  ></span>
  <span
    class="block h-1 w-full bg-dark rounded transition-opacity duration-300"
    class:opacity-0={menuOpen}
  ></span>
  <span
    class="block h-1 w-full bg-dark rounded transition-transform duration-300"
    class:-rotate-45={menuOpen}
    class:-translate-y-3={menuOpen}
  ></span>
</button>

<!-- Mobile Menu -->
<div
  class={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-xl text-white p-6 z-40
  transition-transform duration-300
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <ul class="flex flex-col gap-6 text-xl">
    {#each ["home","about","projects","contact"] as item}
      <li>
        <a
          href={`#${item}`}
          on:click={() => (menuOpen = false)}
          class="hover:underline"
        >
          {item[0].toUpperCase() + item.slice(1)}
        </a>
      </li>
    {/each}
  </ul>
</div>
