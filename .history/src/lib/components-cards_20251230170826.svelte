    <script>
    export let image;
    export let logo = [];
    export let title = "";
    export let text = "";
    export let theme = " ";
    </script>

    <div class="flex flex-col md:flex-row overflow-hidden gap-9 ">
    
    <div class="md:w-1/2 flex justify-center items-center py-9 rounded-lg"
    style="background-color: var(--{theme});">
        <img 
        src={image} 
        alt={title} 
        class="object-cover w-full h-full  max-w-[500px] h-[250px]" 
        />
    </div>

    <div class="md:w-1/2 bg-blue-500 p-6 flex flex-col justify-center gap-3">
        <h3 class="text-xl font-bold text-white">{title}</h3>
        <p class="text-white">{text}</p>
        <div class="flex gap-2 mt-2">
        {#each logo as l}
            <img src={l} alt="logo" class="w-10" />
        {/each}
        </div>
    </div>

    </div>
