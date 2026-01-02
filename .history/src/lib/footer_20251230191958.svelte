    <script>
    import 
    </script>
    <footer class="bg-[#1E1E1E] text-white py-16">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Left Side -->
        <div class="flex flex-col justify-center">
        <h1>Latrell Cruz</h1>

        <div class="flex gap-6 mt-8">
            <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            >
            <img
                src={img.facebook}
                alt="facebook"
                class="w-[3rem] h-auto hover:opacity-80 transition"
            />
            </a>
            <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            >
            <img
                src={img.linkedin}
                alt="linkedin"
                class="w-[2.5rem] h-auto hover:opacity-80 transition"
            />
            </a>
            <a
            href="https://github.com"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            >
            <img
                src={img.github}
                alt="github"
                class="w-[2.5rem] h-auto hover:opacity-80 transition"
            />
            </a>
        </div>
        </div>

        <!-- Right Side - Contact Form -->
        <div class="flex flex-col">
        <h2>Let's work together</h2>

        <form class="mt-8 space-y-6">
            <div>
            <p>Name</p>
            <input
                type="text"
                required
                class="mt-2 w-full px-4 py-3 bg-[#2A2A2A] border border-[#444] rounded-lg focus:outline-none focus:border-[#1B56FD] transition"
                placeholder="Your name"
            />
            </div>

            <div>
            <p>Email</p>
            <input
                type="email"
                required
                class="mt-2 w-full px-4 py-3 bg-[#2A2A2A] border border-[#444] rounded-lg focus:outline-none focus:border-[#1B56FD] transition"
                placeholder="your@email.com"
            />
            </div>

            <div>
            <p>Message</p>
            <textarea
                required
                rows="5"
                class="mt-2 w-full px-4 py-3 bg-[#2A2A2A] border border-[#444] rounded-lg resize-none focus:outline-none focus:border-[#1B56FD] transition"
                placeholder="Your message..."
            ></textarea>
            </div>

            <button
            type="submit"
            class="px-8 py-4 bg-[#1B56FD] hover:bg-[#1a4ce0] rounded-lg font-medium transition duration-300"
            >
            Send
            </button>
        </form>
        </div>
    </div>

    <!-- Optional bottom text -->
    <div class="mt-16 text-center">
        <p>© 2025 Latrell Cruz. All rights reserved.</p>
    </div>
    </footer>
