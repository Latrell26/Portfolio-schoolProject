    <!-- src/components/DayNightWeather.svelte -->
    <script>
        import { LottiePlayer } from 'svelte-lottie-player';

        // Ilagay mo yung buong JSON dito
        const animationData = {
            "v": "5.6.5",
            "fr": 24,
            "ip": 0,
            "op": 28,
            "w": 50,
            "h": 50,
            "nm": "day-night-weather",
            "ddd": 0,
            "assets": [],
            "layers": [ /* ... yung buong layers na binigay mo ... */ ],
            "markers": []
        };

        // Optional settings
        let loop = true;
        let autoplay = true;
        let hover = false; // kung gusto mo mag-play lang pag hover
        let controls = false;
        let renderer = 'svg'; // best for icons
        let speed = 1;
    </script>

    <div class="w-12 h-12"> <!-- Pwede mo baguhin yung size gamit Tailwind -->
        <LottiePlayer
            {animationData}
            {loop}
            {autoplay}
            {hover}
            {controls}
            {renderer}
            {speed}
        />
    </div>