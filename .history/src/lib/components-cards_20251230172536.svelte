    <!-- ProjectCard.svelte -->
    <script>
    export let image = "";    // mockup image ng project
    export let title = "";
    export let text = "";
    export let logo = [];     // array ng tech icons
    export let theme = "primary"; // gamit yung var(--primary), var(--dark), etc.
    </script>

    <div class="relative max-w-2xl mx-auto">
    <!-- Main card with rounded corners and shadow -->
    <div class="rounded-3xl overflow-hidden shadow-2xl">
        <img
        src={image}
        alt={title}
        class="w-full h-auto object-cover"
        />

        <!-- Overlay content (title, text, icons) -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
        <h3 
            class="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            style="color: var(--{theme}); text-shadow: 2px 2px 4px rgba(0,0,0,0.8);"
        >
            {title}
        </h3>
        
        <p class="text-white/90 text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
            {text}
        </p>
        
        <!-- Tech icons row -->
        {#if logo.length > 0}
            <div class="flex gap-4 flex-wrap">
            {#each logo as icon}
                <img src={icon} alt="tech" class="w-10 h-10 md:w-12 md:h-12 drop-shadow" />
            {/each}
            </div>
        {/if}
        </div>
    </div>
    </div>