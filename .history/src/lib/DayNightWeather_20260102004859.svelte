<!-- src/components/DayNightWeather.svelte -->
<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

    // Ilagay mo yung buong JSON data dito
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
        "layers": [
           
        ],
        "markers": []
    };

    // Settings (pwede mo baguhin)
    let autoplay = true;
    let loop = true;
    let hover = false; // play on hover lang kung gusto
    let controls = false; // hide controls
    let renderer = 'svg'; // best for crisp icons
    let speed = 1;
    let background = 'transparent';
</script>

<div class="w-12 h-12"> <!-- Adjust size with Tailwind -->
    <LottiePlayer
        {animationData}
        {autoplay}
        {loop}
        {hover}
        {controls}
        {renderer}
        {speed}
        {background}
    />
</div>