import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const base = import.meta.env.VITE_API_BASE || "";
      const res = await fetch(`${base}${api.projects.list.path}`);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}
