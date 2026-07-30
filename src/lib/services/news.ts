import { NEWS_POSTS } from "@/data/news";
import type { NewsPost } from "@/lib/types";

/** Data-access seam for the iD newsroom feed — mock today, CMS later. */
export async function getNewsPosts(): Promise<NewsPost[]> {
  return NEWS_POSTS;
}
