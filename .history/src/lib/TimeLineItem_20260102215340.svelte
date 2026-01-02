<!-- src/lib/components/TimelineItem.svelte -->
<script>
    export let school = "";
    export let level = "";
    export let year = "";
    export let imageSrc = "https://via.placeholder.com/800x500";
    export let imageAlt = "";
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative mb-24">
    <div class="text-left lg:text-right lg:pr-16 order-2 lg:order-1">
        <h3 class="text-2xl md:text-3xl font-bold">{school}</h3>
        <p class="mt-3 text-lg">{level}</p>
        <p class="mt-2 text-gray-600 dark:text-gray-400">{year}</p>
    </div>

    <!-- Image: Always sa right -->
    <div class="order-1 lg:order-2">
        <div class="rounded-xl shadow-xl overflow-hidden">
            <img 
                src={imageSrc} 
                alt={imageAlt} 
                class="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>
    </div>

    <!-- Dot marker sa gitna -->
    <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900 top-8"></div>
</div>