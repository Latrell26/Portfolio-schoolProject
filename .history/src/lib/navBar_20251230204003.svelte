    <script>
    import svelteLogo from '../assets/svelte.svg'
    import viteLogo from '/vite.svg'
    </script>

    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm max-w-320">
    <div class="flex justify-between items-center px-6 py-6">
        <div>
            <h6 class="text-5xl font-bold">LC</h6>
        </div>

        <ul class="flex gap-12 text-lg">
        <li class="hover:text-indigo-400 cursor-pointer">Home</li>
        <li class="hover:text-indigo-400 cursor-pointer">About</li>
        <li class="hover:text-indigo-400 cursor-pointer">Projects</li>
        <li class="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>

        <div>
        <img src={viteLogo} alt="Vite Logo" class="h-10" />
        </div>
    </div>
    </nav>
