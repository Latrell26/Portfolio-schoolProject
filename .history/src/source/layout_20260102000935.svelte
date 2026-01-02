    <script>
    import { onMount } from "svelte";
    import "../lib/particles.js";

    let container;

    onMount(() => {
        new pJS("site-bg", {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            size: { value: 3 },
            line_linked: { enable: true, color: "#ffffff" },
            move: { enable: true, speed: 2 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "grab" } }
        }
        });
    });
    </script>

    <!-- GLOBAL BACKGROUND -->
    <div
    id="site-bg"
    bind:this={container}
    class="fixed inset-0 -z-50 w-full h-full"
    >
    <canvas class="particles-js-canvas-el"></canvas>
    </div>

    <!-- LAHAT NG CONTENT NG SITE MO -->
    <slot />
