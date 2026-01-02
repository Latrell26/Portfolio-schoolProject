<script>
  import { onMount } from "svelte";

  let activeSection = "home"; // default

  onMount(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 } // 50% of section visible
    );

    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl p-4 flex justify-center gap-8">
  <a
    href="#home"
    class="cursor-pointer hover:underline {activeSection === 'home' ? 'underline font-bold' : ''}"
    >Home</a
  >
  <a
    href="#about"
    class="cursor-pointer hover:underline {activeSection === 'about' ? 'underline font-bold' : ''}"
    >About</a
  >
  <a
    href="#projects"
    class="cursor-pointer hover:underline {activeSection === 'projects' ? 'underline font-bold' : ''}"
    >Projects</a
  >
  <a
    href="#contact"
    class="cursor-pointer hover:underline {activeSection === 'contact' ? 'underline font-bold' : ''}"
    >Contact</a
  >
</nav>
