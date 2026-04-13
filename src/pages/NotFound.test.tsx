import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound", () => {
  it("renders the fallback message", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/missing-page"]}>
        <NotFound />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "404" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();

    errorSpy.mockRestore();
  });
});
