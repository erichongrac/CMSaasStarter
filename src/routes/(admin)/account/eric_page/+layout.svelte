<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import type { LayoutData } from "./$types"

  export let data: LayoutData

  $: ({ session, profile } = data)

  function logProfileData() {
    console.log("All Profile Data:", profile)
  }
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">Eric</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/" class="btn btn-ghost">Home</a></li>
      <li><a href="/portfolio" class="btn btn-ghost">Portfolio</a></li>
      <li><a href="/contact" class="btn btn-ghost">Contact</a></li>
      {#if session && profile}
        <li>
          <button class="btn btn-ghost text-blue-500" on:click={logProfileData}>
            Debug Profile
          </button>
        </li>
      {/if}
    </ul>
  </div>
</div>

<slot />
