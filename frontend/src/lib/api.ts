const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface Project {
  id: number;
  category: string;
  title: string;
  client: string;
  year: string;
  description: string;
  images: string[];
  created_at?: string;
  updated_at?: string;
}

// Helper function to handle cold starts
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 60000
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error: unknown) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(
        "Request timeout - server may be starting up. Please try again."
      );
    }
    throw error;
  }
}

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
  const response = await fetchWithTimeout(`${API_URL}/api/projects/`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

// Get projects by category
export async function getProjectsByCategory(
  category: string
): Promise<Project[]> {
  const response = await fetchWithTimeout(
    `${API_URL}/api/projects/category/${category}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

// Get single project
export async function getProject(id: number): Promise<Project> {
  const response = await fetchWithTimeout(`${API_URL}/api/projects/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  return response.json();
}

// Create project
export async function createProject(
  project: Omit<Project, "id" | "created_at" | "updated_at">
): Promise<Project> {
  const response = await fetchWithTimeout(`${API_URL}/api/projects/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Failed to create project");
  }
  return response.json();
}

// Update project
export async function updateProject(
  id: number,
  project: Omit<Project, "id" | "created_at" | "updated_at">
): Promise<Project> {
  const response = await fetchWithTimeout(`${API_URL}/api/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Failed to update project");
  }
  return response.json();
}

// Delete project
export async function deleteProject(id: number): Promise<void> {
  const response = await fetchWithTimeout(`${API_URL}/api/projects/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Failed to delete project");
  }
}
