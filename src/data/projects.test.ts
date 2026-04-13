import { describe, expect, it } from "vitest";
import { getProjectById, projects } from "@/data/projects";

describe("projects data", () => {
  it("returns a project for a known id", () => {
    const project = getProjectById("1");

    expect(project).toBeDefined();
    expect(project?.title).toBe(projects[0].title);
  });

  it("returns undefined for an unknown id", () => {
    expect(getProjectById("missing-project")).toBeUndefined();
  });
});
