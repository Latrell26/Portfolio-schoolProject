    <script>
    import * as img from "../imagedata.js";
    const socialLinks = [
        {
            name: "facebook",
            href: "https://www.facebook.com/share/1Da6x7yam2/",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.3 3H14v7A10 10 0 0 0 22 12z"/>
                 </svg>`
        },
        {
            name: "linkedin",
            href: "https://www.linkedin.com/in/latrell-cruz-a11975387/",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 10.3h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.5h-3v-9h3v1.2c.4-.7 1.1-1.2 2.2-1.2 1.6 0 2.8 1 2.8 3.2v5.8z"/>
                 </svg>`
        },
        {
            name: "github",
            href: "https://github.com/Latrell26",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5.7 1.5.7.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"/>
                 </svg>`
        }
    ];
    </script>

    <footer class="" >
    <div class="max-w-7xl mx-auto">

        <div class="max-w-2xl">

        <h2 class="">Let's work together</h2>

        <form class="mt-10 space-y-8">
            <div>
            <p class="">Name</p>
            <input
                type="text"
                required
                placeholder="Yourname"
                class="w-full px-0 py-2 bg-transparent border-b-2 
                    focus:outline-none 
                    placeholder-medyolight"
            />
            </div>

            <div>
            <p class="">Email</p>
            <input
                type="email"
                required
                placeholder="your.email@example.com"
                class="w-full px-0 py-2 bg-transparent border-b-2 
                    focus:outline-none
                    placeholder-medyolight"
            />
            </div>
            <div>
            <p class="">Message</p>
            <textarea
                required
                rows="3"
                placeholder="Say hello..."
                class="w-full px-0 py-2 bg-transparent border-b-2 
                    focus:outline-none
                    resize-none placeholder-medyolight"
            ></textarea>
            </div>

            <button
            type="submit"
            class="px-8 py-4 bg-dark rounded-lg text-light cursor-pointer hover:bg-light border-1  hover:text-dark duration-400 ease-out"
            >
            Send message
            </button>
        </form>

        <div class="flex flex-row items-center gap-4 mt-16">
            {#each socialLinks as social}
        <a href={social.href} target="_blank" rel="noopener noreferrer"
           class="transition-colors duration-300 text-[var(--dark)] dark:text-[var(--light)] hover:opacity-80">
            {@html social.svg}
        </a>
    {/each}
        </div>


        <div class="mt-16 mb-8">
            <h6 class="text-sm text-medyolight">© 2025 Latrell Cruz. All rights reserved.</h6>
        </div>

        </div>
    </div>
    </footer>