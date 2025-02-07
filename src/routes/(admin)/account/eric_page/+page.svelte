<script lang="ts">
  import { fade } from "svelte/transition"
  import { goto } from "$app/navigation"
  import EricCard from "$lib/components/EricCard.svelte"
  import type { PageData } from "./$types"
  import { stats } from "$lib/stores/gameStore"

  export let data: any
  $: ({ profile } = data)

  const navigateToPortfolio = () => {
    goto("/account/eric_page/portfolio")
  }
</script>

<div
  class="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4"
  transition:fade
>
  <div
    class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div class="card-body">
      <h1 class="card-title text-4xl font-bold text-primary">
        Hi, I am {profile?.full_name}
      </h1>

      <div class="divider"></div>

      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <i class="fas fa-building text-primary"></i>
          <span class="font-semibold">Company:</span>
          <span class="text-base-content">{profile?.company_name}</span>
        </div>

        <div class="flex items-center gap-2">
          <i class="fas fa-globe text-primary"></i>
          <span class="font-semibold">Country:</span>
          <span class="text-base-content">{profile?.country}</span>
        </div>

        <div class="flex items-center gap-2">
          <i class="fas fa-envelope text-primary"></i>
          <a href="mailto:{profile?.email}" class="link link-primary"
            >{profile?.email}</a
          >
        </div>

        <div class="flex items-center gap-2">
          <i class="fas fa-phone text-primary"></i>
          <a href="tel:{profile?.phone}" class="link link-primary"
            >{profile?.phone}</a
          >
        </div>

        <div class="flex items-center gap-2">
          <i class="fas fa-globe text-primary"></i>
          <a href={profile?.website} target="_blank" class="link link-primary"
            >{profile?.website}</a
          >
        </div>
      </div>

      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary" on:click={navigateToPortfolio}
          >Portfolio</button
        >
        <button class="btn btn-ghost">Contact</button>
      </div>

      <div class="mt-6 flex gap-4 justify-center">
        <div class="badge badge-primary">Developer</div>
        <div class="badge badge-secondary">Designer</div>
        <div class="badge badge-accent">Creator</div>
      </div>
    </div>
  </div>

  <div class="stats shadow mt-8">
    <div class="stat">
      <div class="stat-figure text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <div class="stat-title">Projects</div>
      <div class="stat-value text-primary">25+</div>
      <div class="stat-desc">Jan 2020 - Present</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      </div>
      <div class="stat-title">Skills</div>
      <div class="stat-value text-secondary">15+</div>
      <div class="stat-desc">Technologies</div>
    </div>
  </div>

  <h1>Current Amumu Health: {$stats?.health}</h1>
  <EricCard />
</div>
