    <script>
    export let image = "";
    export let title = "";
    export let text = "";
    export let logo = [];            
    </script>

    <div class="">
    <div class=" overflow-hidden mb-4">
        <img
        src={image}
        alt={title}
        class="w-[600px] h-[350px] object-cover rounded-lg"
        />
    </div>

    <div class="">
        <h3 
        class="font-semibold mb-2"
        >
        {title}
        </h3>

        <p class="leading-relaxed mb-2 max-w-xl">
        {text}
        </p>

        <div class="flex gap-2 flex-wrap">
            {#each logo as icon}
            <img 
                src={icon} 
                alt="tech icon" 
                class="w-1` h-12 md:w-14 md:h-14 object-contain"
            />
            {/each}
        </div>
    </div>
    </div>  