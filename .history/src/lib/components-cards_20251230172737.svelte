    <!-- ProjectCard.svelte -->
    <script>
    export let image = "";
    export let title = "";
    export let text = "";
    export let logo = [];            
    export let theme = "primary";     // gamit var(--primary), var(--dark), etc.
    </script>

    <div class="max-w-lg mx-auto">
    <div class="rounded-3xl overflow-hidden shadow-2xl mb-8">
        <img
        src={image}
        alt={title}
        class="w-full h-auto object-cover"
        />
    </div>

    <!-- Content sa BABA ng image -->
    <div class="text-center px-4">
        <!-- Title – malaki at colored gamit yung theme -->
        <h3 
        class="text-4xl md:text-5xl font-bold mb-4"
        style="color: var(--{theme});"
        >
        {title}
        </h3>

        <!-- Description text -->
        <p class="text-dark/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
        {text}
        </p>

        <!-- Tech Icons Row -->
        {#if logo.length > 0}
        <div class="flex justify-center gap-6 flex-wrap">
            {#each logo as icon}
            <img 
                src={icon} 
                alt="tech icon" 
                class="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            {/each}
        </div>
        {/if}
    </div>
    </div>  