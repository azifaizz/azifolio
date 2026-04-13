import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProjectDetail from "@/pages/ProjectDetail";

const renderProjectDetail = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>,
  );

describe("ProjectDetail", () => {
  it("renders a valid project page", () => {
    renderProjectDetail("/project/1");

    expect(
      screen.getByRole("heading", {
        name: /brain tumor cancer prediction using machine learning/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/about the project/i)).toBeInTheDocument();
  });

  it("renders a not found state for an invalid project id", () => {
    renderProjectDetail("/project/unknown");

    expect(
      screen.getByRole("heading", { name: /project not found/i }),
    ).toBeInTheDocument();
  });
});
