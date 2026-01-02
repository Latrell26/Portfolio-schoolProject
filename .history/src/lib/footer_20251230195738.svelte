    <script>
    import * as img from "../imagedata.js";
    </script>

    <footer class=" text-dark">
    <div class="max-w-7xl mx-auto">

        <div class="max-w-2xl">

        <h2>Let's work together</h2>

        <form class="mt-10 space-y-8">
            <div>
            <p class="">Name</p>
            <input
                type="text"
                required
                placeholder="Latrell Cruz"
                class="w-full px-0 py-2 bg-transparent border-b-2 border-dark 
                    focus:outline-none 
                    placeholder-dark"
            />
            </div>

            <div>
            <p class="">Email</p>
            <input
                type="email"
                required
                placeholder="your.email@example.com"
                class="w-full px-0 py-2 bg-transparent border-b-2 border-dark 
                    focus:outline-none
                    placeholder-dark"
            />
            </div>
            <div>
            <p class="">Message</p>
            <textarea
                required
                rows="3"
                placeholder="Say hello or tell me about your project..."
                class="w-full px-0 py-2 bg-transparent border-b-0 border-dark 
                    focus:outline-none
                    resize-none placeholder-dark"
            ></textarea>
            </div>

            <button
            type="submit"
            class="px-8 py-4 bg-dark rounded-lg text-light"
            >
            Send message
            </button>
        </form>

        <div class="flex flex-row items-center gap-4 mt-16">
            <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            >
            <img
                src={img.facebook}
                alt="facebook"
                class="w-9.5 h-auto hover:opacity-80 transition"
            />
            </a>
            <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            >
            <img
                src={img.linkedin}
                alt="linkedin"
                class="w-8 h-auto hover:opacity-80 transition"
            />
            </a>
            <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            >
            <img
                src={img.github}
                alt="github"
                class="w-8 h-auto hover:opacity-80 transition"
            />
            </a>
        </div>

        <div class="mt-16">
            <h6 class="text-sm">© 2025 Latrell Cruz. All rights reserved.</h6>
        </div>

        </div>
    </div>
    </footer>