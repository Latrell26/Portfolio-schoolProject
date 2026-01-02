<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import NavBar from "./lib/navBar.svelte";
  import Footer from "./lib/footer.svelte";
  import * as img from "./imagedata.js";
  import { projects } from "./lib/arrayObjectsData.js";
  import ProjectCard from "./lib/components-cards.svelte";
  import TimelineItem from "./lib/components-cards.svelte";
  const icons = [
    { src: img.csharplogo, name: "C#" },
    { src: img.csslogo, name: "CSS" },
    { src: img.htmllogo, name: "HTML" },
    { src: img.javalogo, name: "Java" },
    { src: img.jslogo, name: "JavaScript" },
    { src: img.pythonlogo, name: "Python" },
    { src: img.sveltelogo, name: "Svelte" },
    { src: img.tailwindlogo, name: "Tailwind CSS" },
    { src: img.figmalogo, name: "Figma" },
    { src: img.supabaselogo, name: "Supabase" },
    { src: img.firebaselogo, name: "Firebase" },
    { src: img.github, name: "GitHub" },
    { src: img.gitlogo, name: "Git" },
  ];
</script>

<main class="max-w-330 mx-auto pt-2 px-4 lg:px-10 duration-300">
  <NavBar />
  <section
    class="h-screen flex flex-col justify-center items-center text-center"
    id="home"
  >
    <div>
      <h1 class="font-bold">Latrell Cruz</h1>
      <p class=" text-lg max-w-2xl">
        Aspiring Front-End Developer and senior high school student focused on
        building clean, responsive websites.
      </p>
    </div>

    <div class="flex flex-row gap-4 mt-4 justify-center items-center">
      <a href="https://www.facebook.com/share/1Da6x7yam2/">
        <i class="fa-brands fa-facebook text-[2.7rem] hover:text-[#1877F2] duration-300"></i>
      </a>
      <a href="https://www.linkedin.com/in/latrell-cruz-a11975387/">
        <i class="fa-brands fa-linkedin text-[2.8rem] hover:text-[#0A66C2] duration-300"></i>
      </a>
      <a href="https://github.com/Latrell26">
        <i class="fa-brands fa-github text-[2.8rem] duration-300"></i>
      </a>
    </div>
  </section>

  <section class="mb-35 pt-10" id="about">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex flex-col">
        <h2 class="mb-6">About me</h2>
        <div class="max-w-[50rem] leading-10 flex-1 text-justify">
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
            I am also part of OCTA, an organization in LSPU, where I belong to
            the Software Engineering as part of the Front-End team.
            Being part of OCTA helps me gain real experience, work with other
            developers, and improve my skills even more.
          </p>
        </div>
      </div>
      <img src={img.me} alt="me" class="hidden xl:block w-auto h-auto" />
    </div>
  </section>
  <section class="mb-5">
    <h3 class="flex justify-center items-center">Tech I Use</h3>
    <div class="relative overflow-hidden py-4 pt-12">
      <div
        class="pointer-events-none absolute inset-0 z-10
          bg-[linear-gradient(to_right,var(--light_bg)_0%,transparent_20%,transparent_80%,var(--light_bg)_100%)]
          "
      ></div>

      <div class="flex animate-[slide_26s_linear_infinite] gap-8 md:gap-16">
  <div class="flex gap-8 md:gap-16 flex-none">
    {#each icons as icon}
      <div class="relative group">
        <img
          src={icon.src}
          alt={icon.name}
          class="flex-none
                 h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24
                 transition-transform duration-300 ease-out
                 group-hover:scale-110 group-hover:-translate-y-2
                 cursor-pointer"
        />

        <span
          class="tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium
                 rounded-lg opacity-0 group-hover:opacity-100
                 pointer-events-none whitespace-nowrap
                 transition-opacity duration-300 ease-out shadow-lg"
        >
          {icon.name}
          <span
            class="absolute top-full left-1/2 -translate-x-1/2
                   border-4 sm:border-8 border-light border-t-light"
          ></span>
        </span>
      </div>
    {/each}
  </div>

  <div class="flex gap-8 md:gap-16 flex-none">
    {#each icons as icon}
      <div class="relative group">
        <img
          src={icon.src}
          alt={icon.name}
          class="flex-none
                 h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24
                 transition-transform duration-300 ease-out
                 group-hover:scale-110 group-hover:-translate-y-2
                 cursor-pointer"
        />

        <span
          class="tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium
                 rounded-lg opacity-0 group-hover:opacity-100
                 pointer-events-none whitespace-nowrap
                 transition-opacity duration-300 ease-out shadow-lg"
        >
          {icon.name}
          <span
            class="absolute top-full left-1/2 -translate-x-1/2
                   border-4 sm:border-8 border-light border-t-light"
          ></span>
        </span>
      </div>
    {/each}
  </div>
</div>

      </div>
  </section>
  <section id="education" class="py-20 px-6 bg-light dark:bg-dark">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-center text-4xl md:text-5xl font-bold mb-20">Education</h2>

            <div class="relative">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 h-full hidden lg:block"></div>

                <div class="space-y-0"> 

                    <TimelineItem
                        school="Laguna State Polytechnic University"
                        level="College • Bachelor of Science in Information Technology"
                        year="2023 – Present"
                        imageSrc="/images/lspu.jpg"  
                        imageAlt="LSPU Campus"
                    />

                    <TimelineItem
                        school="STI College"
                        level="Senior High School • STEM Strand"
                        year="2021 – 2023"
                        imageSrc="/images/sti.jpg"
                        imageAlt="STI College"
                    />

                    <TimelineItem
                        school="Dizon National High School"
                        level="Junior High School"
                        year="2017 – 2021"
                        imageSrc="/images/dizon.jpg"
                        imageAlt="Dizon National High School"
                    />

                    <TimelineItem
                        school="San Pablo Central School"
                        level="Elementary"
                        year="2011 – 2017"
                        imageSrc="/images/spcs.jpg"
                        imageAlt="San Pablo Central School"
                    />

                </div>
            </div>
        </div>
    </section>
  <section class="mb-70 pt-20" id="projects">
    <h2 class="text-center mb-8">What I Build</h2>
    <div class="flex flex-wrap justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
  <section id="contact" class="pt-20">
    <Footer />
  </section>
</main>

<style>
  .tooltip {
    background-color: #0b0b0b; 
    color: #f2f2f7; 
    border-color: #0b0b0b; 
  }

  .tooltip span {
    border-top-color: #0b0b0b; 
  }

  :global(.dark-mode) .tooltip {
    background-color: #f2f2f7; 
    color: #0b0b0b; 
    border-color: #f2f2f7; 
  }

  :global(.dark-mode) .tooltip span {
    border-top-color: #f2f2f7;
  }
</style>
