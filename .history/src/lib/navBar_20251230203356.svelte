<script>
  import svelteLogo from '../assets/svelte.svg'
  import viteLogo from '/vite.svg'
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
  <div class="max-w-7xl      flex justify-between items-center">
    <div>
      <h6 class="text-4xl md:text-5xl font-extrabold tracking-tight text-dark">
        LC
      </h6>
    </div>

    <ul class="hidden md:flex gap-12 text-lg ">
      <li class="hover:text-indigo-500 cursor-pointer transition-colors duration-300">Home</li>
      <li class="hover:text-indigo-500 cursor-pointer transition-colors duration-300">About</li>
      <li class="hover:text-indigo-500 cursor-pointer transition-colors duration-300">Projects</li>
      <li class="hover:text-indigo-500 cursor-pointer transition-colors duration-300">Contact</li>
    </ul>

    <!-- Right Logo (slightly larger) -->
    <div>
      <img src={viteLogo} alt="Vite Logo" class="h-12 md:h-14" />
    </div>
  </div>
</nav>