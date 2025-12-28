import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import fallbackProjects from "@/data/projects";

export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const base = import.meta.env.VITE_API_BASE || "";
      try {
        const res = await fetch(`${base}${api.projects.list.path}`);
        if (!res.ok) throw new Error("Failed to fetch projects");
        return api.projects.list.responses[200].parse(await res.json());
      } catch (err) {
        // Fallback to bundled static projects for environments without the API (e.g., Vercel static deploy)
        return fallbackProjects;
      }
    },
  });
}
