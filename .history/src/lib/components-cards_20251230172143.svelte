    <script>
    export let image;
    export let logo = [];
    export let title = "";
    export let text = "";
    </script>

    <div class="flex flex-col justify-center md:flex-row rounded-lg overflow-hidden gap-9">
    
    <div class="flex justify-center items-center py-9 bg-amber-400 w-[35rem] ">
        <img 
        src={image} 
        alt={title} 
        class="object-cover w-full h-full rounded-lg hover:scale-105 duration-500 cursor-pointer max-w-[500px] h-[250px]" 
        />
    </div>

    <div class=" bg-blue-500 p-6 flex flex-col justify-center gap-3">
        <h3 class="text-xl font-bold text-white">{title}</h3>
        <p class="text-white">{text}</p>
        <div class="flex gap-2 mt-2">
        {#each logo as l}
            <img src={l} alt="logo" class="w-10" />
        {/each}
        </div>
    </div>

    </div>
