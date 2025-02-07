// src/routes/+layout.ts
import type { LayoutLoad } from "./$types"
import { userId } from "$lib/stores/userStore"

export const load: LayoutLoad = async ({ data }: any) => {
  // data contains session and profile from layout.server.ts
  if (data.session && data.profile) {
    userId.set(data.session.user.id)
  } else {
    userId.set(null)
  }

  return {
    session: data.session,
    profile: data.profile,
  }
}
