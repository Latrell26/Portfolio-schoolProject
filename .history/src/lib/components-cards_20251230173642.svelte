    <script>
    export let image = "";
    export let title = "";
    export let text = "";
    export let logo = [];            
    </script>

    <div class="max-w-lg mx-auto">
    <div class="rounded-lg overflow-hidden mb-8">
        <img
        src={image}
        alt={title}
        class="mx-w-[600px] mx-h-[] object-cover"
        />
    </div>

    <div class="">
        <h3 
        class="text-4xl md:text-5xl font-bold mb-4"
        >
        {title}
        </h3>

        <p class="leading-relaxed mb-8 max-w-2xl mx-auto">
        {text}
        </p>

        <div class="flex gap-6 flex-wrap">
            {#each logo as icon}
            <img 
                src={icon} 
                alt="tech icon" 
                class="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            {/each}
        </div>
    </div>
    </div>  