import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPostById } from "@/data/blogs";

describe("blogs data", () => {
  it("returns a blog post for a known id", () => {
    const post = getBlogPostById("distraction-blocker");

    expect(post).toBeDefined();
    expect(post?.title).toBe(blogPosts[0].title);
  });

  it("returns undefined for an unknown id", () => {
    expect(getBlogPostById("missing-post")).toBeUndefined();
  });
});
