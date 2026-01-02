<script>
  export let school = "";
  export let level = "";
  export let year = "";
  export let image = "https://via.placeholder.com/800x500";
  export let imageAlt = "";
  export let isLeft = true; 
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative mb-24">
    <div class={`text-left lg:text-right lg:pr-16 ${isLeft ? "order-2 lg:order-1" : "order-2 lg:order-2 text-right lg:text-left lg:pl-16"}`}>
        <h3 class="text-2xl md:text-3xl font-bold">{school}</h3>
        <p class="mt-3 text-lg">{level}</p>
        <p class="mt-2 ">{year}</p>
    </div>

    <div class={`${isLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
        <div class="rounded-xl shadow-lg overflow-hidden">
            <img 
                src={image} 
                alt={imageAlt} 
                class="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>
    </div>

    <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900 top-8"></div>
</div>
