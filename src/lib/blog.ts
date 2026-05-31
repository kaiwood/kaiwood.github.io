import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getBlogPosts(options: { includeDrafts?: boolean } = {}): Promise<BlogPost[]> {
  const includeDrafts = options.includeDrafts ?? !import.meta.env.PROD;
  const posts = await getCollection("blog", ({ data }) => includeDrafts || data.draft !== true);

  return sortPostsByDate(posts);
}
