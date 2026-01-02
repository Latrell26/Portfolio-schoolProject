<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import NavBar from "./lib/navBar.svelte";
  import * as img from "./imagedata.js";
  import { projects } from "./lib/arrayObjectsData.js";
  import ProjectCard from "./lib/components-cards.svelte";
  const icons = [
    img.csharplogo,
    img.csslogo,
    img.htmllogo,
    img.javalogo,
    img.jslogo,
    img.pythonlogo,
    img.sveltelogo,
    img.tailwindlogo,
    img.figmalogo,
    img.supabaselogo,
    img.firebaselogo,
    img.github,
    img.gitlogo,
  ];
  
</script>

<main class="max-w-350 mx-auto p-4">
  <section class="mb-70">
    <div class="flex flex-col justify-center mt-48">
      <p class="text-[#1E1E1E] text-lg max-w-2xl">
        Aspiring Front-End Developer and senior high school student focused on
        building clean, responsive websites.
      </p>
    </div>
    <div class="flex flex-row gap-4 mt-2">
      <img src={img.facebook} alt="facebook" class="w-[3rem] h-auto" />
      <img src={img.linkedin} alt="linkedin" class="w-[2.5rem] h-auto" />
      <img src={img.github} alt="github" class="w-[2.5rem] h-auto" />
    </div>
  </section>
  <section class="mb-35">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex flex-col f">
        <h2 class="mb-6">About me</h2>
        <div class="max-w-[50rem] leading-10">
          <p>
            Hey there! I'm Latrell Cruz from Brgy. San Nicolas, San Pablo City.
            I love making digital experiences that are easy to use and fun to
            interact with.
          </p>
          <p class="mt-4">
            I’m currently a 1st year student at LSPU San Pablo Campus, studying
            Information Technology. I’ve always been interested in technology
            and design, which made me focus on front-end development and UI/UX.
            I enjoy mixing creativity with coding to build websites and apps
            that people like and find useful.
          </p>
          <p class="mt-4">
            I am also part of OCTA, an organization in LSPU, where I belong to the Software Engineering department as part of the Front-End team. Being part of OCTA helps me gain real experience, work with other developers, and improve my skills even more.
          </p>
        </div>
      </div>
      <img src={img.me} alt="me" class="w-auto h-auto" />
    </div>
  </section>
  <section class="mb-35">
    <h3 class="flex justify-center items-center">Tech I Use</h3>
    <div class="relative overflow-hidden mt-8 py-4">
      <!-- Fade overlay -->
      <div
        class="pointer-events-none absolute inset-0 z-10
              bg-[linear-gradient(to_right,#F2F2F7_0%,transparent_20%,transparent_80%,#F2F2F7_100%)]"
      ></div>

      <div class="flex animate-[slide_20s_linear_infinite] gap-16">
        <div class="flex gap-16 flex-none">
          {#each icons as icon}
            <img src={icon} class="h-[6rem] w-[6rem] flex-none" alt="" />
          {/each}
        </div>

        <div class="flex gap-16 flex-none">
          {#each icons as icon}
            <img src={icon} class="h-[6rem] w-[6rem] flex-none" alt="" />
          {/each}
        </div>
      </div>
    </div>
  </section>
  <section class="">
  <h2 class="text-center mb-16 ">
    What I Build
  </h2>
<div class="flex flex-wrap justify-center">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
    {#each projects as project}
      <ProjectCard
        image={project.image}
        title={project.title}
        text={project.text}
        logo={project.logo || []}
        url={project.url}
      />
    {/each}
  </div>
  </div>
</section>
</main>
