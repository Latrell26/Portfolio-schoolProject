<button
    on:click={toggleDarkMode}
    class="relative w-14 h-7 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow-md"
    aria-label="Toggle dark mode"
>
    <div
        class="w-7 h-7 rounded-full transition-all duration-500 transform text-white flex items-center justify-center
               {isDark ? 'bg-gray-700 translate-x-7' : 'bg-yellow-500 translate-x-0'}"
    >
        {@html currentIcon}
    </div>
</button>
