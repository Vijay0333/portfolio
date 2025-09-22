import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Featured Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.url} project={project} />
      ))}
    </section>
  );
}