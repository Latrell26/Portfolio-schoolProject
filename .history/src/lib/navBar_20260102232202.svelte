<button
    on:click={toggleDarkMode}
    class="relative w-14 h-7 rounded-full bg-white shadow-md flex items-center cursor-pointer mb-6 z-50"
  >
    <div class="w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center text-white
           {isDark ? 'bg-dark translate-x-7' : 'bg-yellow-500 translate-x-0'}">
      {@html currentIcon}
    </div>
  </button>