import { writable } from "svelte/store"

export const stats = writable({
  health: 0,
  mana: 0,
})
