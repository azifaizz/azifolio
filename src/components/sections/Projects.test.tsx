import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Projects from "@/components/sections/Projects";

describe("Projects section", () => {
  it("renders the section heading and project actions", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /featured projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /view details/i }).length,
    ).toBeGreaterThan(0);
  });
});
