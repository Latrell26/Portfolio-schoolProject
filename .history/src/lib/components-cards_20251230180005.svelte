    <script>
    export let image = "";
    export let title = "";
    export let text = "";
    export let logo = [];            
    </script>

    <div class="">
    <div class=" overflow-hidden mb-6">
        <img
        src={image}
        alt={title}
        class="w-[600px] h-[350px] object-cover rounded-lg"
        />
    </div>

    <div class="">
        <h3 
        class="font-semibold mb-4"
        >
        {title}
        </h3>

        <p class="leading-relaxed mb-2 max-w-xxl text-justify">
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