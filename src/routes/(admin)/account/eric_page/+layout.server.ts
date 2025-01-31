// +layout.server.ts
import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { supabase, safeGetSession },
}) => {
  const session = await safeGetSession()

  if (!session) {
    throw redirect(303, "/login")
  }

  try {
    // Fetch all profiles
    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")

    if (error) throw error

    return {
      session,
      profiles: profiles || [],
    }
  } catch (error) {
    console.error("Error loading profiles:", error)
    return {
      session,
      profiles: [],
      error: "Failed to load profiles",
    }
  }
}
