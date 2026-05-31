export async function fetchGithubStars(repo: string, fallbackStars: number): Promise<number> {
  try {
    const token = (globalThis as typeof globalThis & {
      process?: { env?: Record<string, string | undefined> };
    }).process?.env?.GITHUB_TOKEN;

    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`https://api.github.com/repos/${repo}`, { headers });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status} for ${repo}`);
    }

    const data = (await response.json()) as { stargazers_count?: unknown };

    if (typeof data.stargazers_count !== "number") {
      throw new Error(`GitHub API response did not include stars for ${repo}`);
    }

    return data.stargazers_count;
  } catch (error) {
    console.warn(`Using fallback GitHub stars for ${repo}.`, error);
    return fallbackStars;
  }
}
