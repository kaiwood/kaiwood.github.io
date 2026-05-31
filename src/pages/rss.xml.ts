import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getBlogPosts } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = await getBlogPosts({ includeDrafts: false });

  return rss({
    title: "kaiwood Blog",
    description: "Thoughts, tutorials, and experiences about development and tools.",
    site: context.site ?? "https://kaiwood.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
