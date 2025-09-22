import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 8,
      padding: "1rem",
      marginBottom: "1rem",
      background: "#fff"
    }}>
      <h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
      </h3>
      {project.description && <p>{project.description}</p>}
      <div style={{ fontSize: 14, color: "#666" }}>
        <strong>Languages:</strong> {project.languages.join(", ")}
        {typeof project.stars === "number" && (
          <>
            {" | "}
            <strong>Stars:</strong> {project.stars}
          </>
        )}
      </div>
    </div>
  );
}