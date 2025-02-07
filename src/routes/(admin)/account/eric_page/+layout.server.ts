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

  // Get the authenticated user's ID
  const userId = session.user.id

  try {
    // Fetch profile matching the authenticated user's ID
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single() // Use single() since we expect one matching profile

    if (error) throw error

    return {
      session,
      profile: profile || null,
    }
  } catch (error) {
    console.error("Error loading profile:", error)
    return {
      session,
      profile: null,
      error: "Failed to load profile",
    }
  }
}
