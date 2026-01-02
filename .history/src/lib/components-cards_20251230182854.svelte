    <script>
    export let image = "";
    export let title = "";
    export let text = "";
    export let logo = [];
    export let url = "#";  
    </script>

    <div class="">
    <a href={url} target="_blank" rel="noopener noreferrer" class="block">
        <div class="relative w-full max-w-[600px] h-[350px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
        <img
            src={image}
            alt={title}
            class="w-full h-full object-cover transition-transform duration-500 ease-out
                group-hover:scale-105"
        />

        <!-- Hover Overlay: Gradient + Glassmorphism + Text -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                    flex items-end justify-center pb-12">
            
            <div class="text-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <p class="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-2xl">
                View project →
            </p>
            </div>
        </div>
        </div>
    </a>

    <div class="">
        <h3 class="font-semibold mb-4">
        {title}
        </h3>

        <p class="leading-relaxed mb-2 max-w-[37rem] text-justify">
        {text}
        </p>

        <div class="flex gap-2 flex-wrap">
        {#each logo as icon}
            <img
            src={icon}
            alt="tech icon"
            class="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
        {/each}
        </div>
    </div>
    </div>
