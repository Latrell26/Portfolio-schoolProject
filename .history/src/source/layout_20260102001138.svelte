    <script>
    import { onMount } from "svelte";

    onMount(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/particles.js";
        document.body.appendChild(script);

        script.onload = () => {
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
        };
    });
    </script>

    <div id="site-bg" class="fixed inset-0 -z-50 w-full h-full">
    <canvas class="particles-js-canvas-el"></canvas>
    </div>

    <slot />
