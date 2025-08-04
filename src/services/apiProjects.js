import supabase from "./supabase";

export async function getProjects() {
  const { data: projects, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error(error);
    throw new Error("Projects could not be loaded");
  }

  return projects;
}
