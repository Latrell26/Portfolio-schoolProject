<script>
  export let image = "";
  export let title = "";
  export let text = "";
  export let logo = [];
  export let url = "#";  
</script>

<!-- Main card container - centered + group for hover -->
<div class="max-w-2xl mx-auto group">
  <!-- Clickable Image with Hover Effect -->
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    class="block mb-8"
    aria-label="View {title} project"
  >
    <div class="relative w-full h-[350px] max-w-[600px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
      <img
        src={image}
        alt={title}
        class="w-full h-full object-cover transition-transform duration-700 ease-out
               group-hover:scale-105"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out
                  flex items-end justify-center pb-10">
        
        <div class="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <p class="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-2xl">
            View project →
          </p>
        </div>
      </div>
    </div>
  </a>

  <div class="text-center px-4">
    <h3 
      class="text-4xl md:text-5xl font-bold mb-6"
      style="color: var(--primary);"
    >
      {title}
    </h3>

    <p class="text-dark/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-justify">
      {text}
    </p>

    {#if logo.length > 0}
      <div class="flex justify-center gap-6 flex-wrap">
        {#each logo as icon}
          <img
            src={icon}
            alt="technology icon"
            class="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md"
          />
        {/each}
      </div>
    {/if}
  </div>
</div>