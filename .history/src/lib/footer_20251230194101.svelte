<script>
  import * as img from "../imagedata.js";
</script>

<footer class="py-16 bg-[#1E1E1E] text-white">
  <div class="max-w-7xl mx-auto px-6">

    <!-- All content on the left side -->
    <div class="max-w-2xl">

      <!-- Contact Section -->
      <h2>Let's work together</h2>

      <div class="mt-8 space-y-6">
        <div>
          <p class="underline mb-2">Name</p>
          <p>Latrell Cruz</p>
        </div>

        <div>
          <p class="underline mb-2">Email</p>
          <p>your.email@example.com</p> <!-- Palitan mo ng actual email mo -->
        </div>

        <div>
          <p class="underline mb-2">Message</p>
          <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="flex gap-6 mt-12">
        <a
          href="https://facebook.com/yourprofile"
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
          href="https://linkedin.com/in/yourprofile"
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
          href="https://github.com/yourusername"
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

      <!-- Copyright -->
      <div class="mt-16">
        <p>© 2025 Latrell Cruz. All rights reserved.</p>
      </div>
    </div>

  </div>
</footer>