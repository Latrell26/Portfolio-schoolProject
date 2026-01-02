    <script>
    export let image = "";
    export let title = "";
    export let text = "";
    export let logo = [];
    export let url = "#";  
    </script>

    <div class="group">  
    <a href={url} target="_blank" rel="noopener noreferrer" class="block">
        <div class="mb-4 relative rounded-lg overflow-hidden">  
        <div class="">
            <img
            src={image}
            alt={title}
            class="w-[600px] h-[350px] object-cover transition-transform duration-400 ease-out
                group-hover:scale-104 cursor-pointer"
            />

            <div class="absolute inset-0 
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-400 ease-out
                        backdrop-blur-sm
                        bg-white/5 
                        flex items-end justify-center pb-8
                        pointer-events-none"> 

            <div class="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-2 border border-white/30 shadow-xl
                        translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <p class="text-white  tracking-wide drop-shadow-lg ">
                View project →
                </p>
            </div>
            </div>
        </div>
        </div>
    </a>

    <div class="">
        <h3 class="font-semibold mb-2">
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