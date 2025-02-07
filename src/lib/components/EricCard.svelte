<!-- src/lib/components/EricCard.svelte -->
<script lang="ts">
  import { onMount } from "svelte"
  import { stats } from "$lib/stores/gameStore"
  import { userId } from "$lib/stores/userStore"
  import { supabase } from "$lib/supabase"

  let loading = true
  let error: string | null = null

  async function loadInitialStats() {
    if (!$userId) {
      error = "No user ID available"
      loading = false
      return
    }

    const { data: statsData, error: statsError } = await supabase
      .from("stats")
      .select("health, mana")
      .eq("id", $userId)
      .single()

    if (statsError) {
      console.error("Error loading stats:", statsError)
      error = "Failed to load stats"
      loading = false
      return
    }

    if (statsData) {
      stats.set({
        health: statsData.health,
        mana: statsData.mana,
      })
    } else {
      // Create initial stats if none exist
      await createInitialStats()
    }

    loading = false
  }

  async function createInitialStats() {
    const { error: createError } = await supabase
      .from("stats")
      .insert({
        user_id: $userId,
        health: 100,
        mana: 100,
      })
      .single()

    if (createError) {
      console.error("Error creating initial stats:", createError)
      error = "Failed to create initial stats"
      return
    }

    stats.set({
      health: 100,
      mana: 100,
    })
  }

  async function saveStatsToDatabase() {
    const { error: saveError } = await supabase
      .from("stats")
      .update({
        health: $stats.health,
        mana: $stats.mana,
      })
      .eq("id", $userId)
      .single()

    if (saveError) {
      console.error("Error saving stats:", saveError)
      alert("Failed to save stats")
      return
    }

    alert("Stats saved successfully!")
  }

  function incrementHealth() {
    stats.update((s) => ({
      ...s,
      health: s.health + 10,
    }))
  }

  function decrementHealth() {
    stats.update((s) => ({
      ...s,
      health: s.health - 10,
    }))
  }

  function incrementMana() {
    stats.update((s) => ({
      ...s,
      mana: s.mana + 10,
    }))
  }

  function decrementMana() {
    stats.update((s) => ({
      ...s,
      mana: s.mana - 10,
    }))
  }

  onMount(() => {
    loadInitialStats()
  })
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  {#if loading}
    <div class="p-4">Loading...</div>
  {:else if error}
    <div class="p-4 text-red-500">{error}</div>
  {:else}
    <div class="card-body">
      <h2 class="card-title">Character Stats</h2>

      <div class="flex flex-col gap-4">
        <div>
          <p>Health: {$stats.health}</p>
          <div class="flex gap-2">
            <button class="btn btn-primary" on:click={decrementHealth}>-</button
            >
            <button class="btn btn-primary" on:click={incrementHealth}>+</button
            >
          </div>
        </div>

        <div>
          <p>Mana: {$stats.mana}</p>
          <div class="flex gap-2">
            <button class="btn btn-secondary" on:click={decrementMana}>-</button
            >
            <button class="btn btn-secondary" on:click={incrementMana}>+</button
            >
          </div>
        </div>

        <button class="btn btn-accent" on:click={saveStatsToDatabase}>
          Save Stats
        </button>
      </div>
    </div>
  {/if}

  <!-- Debug info -->
  <div class="p-4 text-sm text-gray-600 border-t">
    User ID: {$userId ?? "Not available"}
  </div>
</div>
