<script>
  import viteLogo from '/vite.svg'
  import { onMount } from "svelte";

  let showNav = false;

  onMount(() => {
    window.addEventListener("scroll", () => {
      showNav = window.scrollY > 80;
    });
  });
</script>

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
  ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg`}>
  
  <div class="flex justify-between items-center px-6 py-4">
    <div>
      <h6 class="text-5xl font-semibold">LC</h6>
    </div>

    <ul class="flex gap-12 text-lg">
      <li class="hover:text-indigo-400 cursor-pointer">Home</li>
      <li class="hover:text-indigo-400 cursor-pointer">About</li>
      <li class="hover:text-indigo-400 cursor-pointer">Projects</li>
      <li class="hover:text-indigo-400 cursor-pointer">Contact</li>
    </ul>

    <div>
      <img src={viteLogo} alt="Vite Logo" class="h-10" />
    </div>
  </div>
</nav>
