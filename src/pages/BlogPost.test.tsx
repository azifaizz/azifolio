import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import BlogPost from "@/pages/BlogPost";

const renderBlogPost = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>,
  );

describe("BlogPost", () => {
  it("renders a valid blog page", () => {
    renderBlogPost("/blog/distraction-blocker");

    expect(
      screen.getByRole("heading", { name: /distraction blocker/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a productive idea with personality/i),
    ).toBeInTheDocument();
  });

  it("renders a not found state for an invalid blog id", () => {
    renderBlogPost("/blog/unknown");

    expect(
      screen.getByRole("heading", { name: /blog post not found/i }),
    ).toBeInTheDocument();
  });
});
