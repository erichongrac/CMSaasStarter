<script lang="ts">
  import { fade } from "svelte/transition"
  import EricCard from "$lib/components/EricCard.svelte"

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with SvelteKit and Stripe integration.",
      tech: ["SvelteKit", "Stripe", "TailwindCSS"],
      year: "2023",
      category: "Web Development",
    },
    {
      title: "Task Management App",
      description:
        "A productive task management application with real-time updates.",
      tech: ["Svelte", "Firebase", "DaisyUI"],
      year: "2023",
      category: "Web Application",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasting.",
      tech: ["SvelteKit", "OpenWeather API", "Charts.js"],
      year: "2022",
      category: "Data Visualization",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing my projects and skills.",
      tech: ["SvelteKit", "TailwindCSS", "DaisyUI"],
      year: "2024",
      category: "Web Development",
    },
  ]
</script>

<div class="min-h-screen bg-base-200 p-8" transition:fade>
  <!-- Header Section -->
  <div class="text-center mb-12">
    <h1 class="text-5xl font-bold text-primary mb-4">My Portfolio</h1>
    <div class="flex justify-center gap-2 mb-8">
      <a href="/" class="btn btn-ghost btn-sm">Home</a>
      <button class="btn btn-ghost btn-sm">All Projects</button>
      <button class="btn btn-ghost btn-sm">Web Dev</button>
      <button class="btn btn-ghost btn-sm">Design</button>
    </div>
  </div>

  <!-- Projects Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
      <div
        class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h2 class="card-title text-2xl">{project.title}</h2>
            <div class="badge badge-secondary">{project.year}</div>
          </div>

          <p class="py-4">{project.description}</p>

          <div class="flex flex-wrap gap-2 my-4">
            {#each project.tech as tech}
              <div class="badge badge-primary badge-outline">{tech}</div>
            {/each}
          </div>

          <div class="card-actions justify-end mt-4">
            <button class="btn btn-primary btn-sm">View Project</button>
            <button class="btn btn-ghost btn-sm">Source Code</button>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Skills Section -->
  <div class="mt-16">
    <h2 class="text-3xl font-bold text-center mb-8">Technical Skills</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Frontend</div>
          <div class="stat-value text-primary">90%</div>
          <div class="stat-desc">
            <progress
              class="progress progress-primary w-56"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title">Backend</div>
          <div class="stat-value text-secondary">85%</div>
          <div class="stat-desc">
            <progress
              class="progress progress-secondary w-56"
              value="85"
              max="100"
            ></progress>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title">Design</div>
          <div class="stat-value text-accent">75%</div>
          <div class="stat-desc">
            <progress class="progress progress-accent w-56" value="75" max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  </div>

  <EricCard />

  <!-- Contact CTA -->
  <div class="mt-16 text-center">
    <div class="card bg-base-100 shadow-xl max-w-2xl mx-auto">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Interested in working together?
        </h2>
        <p class="py-4">
          Let's discuss your next project and create something amazing.
        </p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  </div>
</div>
