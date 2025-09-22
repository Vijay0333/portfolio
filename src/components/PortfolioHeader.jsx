import React from "react";
import { profile } from "../data/profile";

export default function PortfolioHeader() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      padding: "2rem 0",
      borderBottom: "1px solid #eee"
    }}>
      <img src={profile.avatar} alt={profile.name} style={{ width: 80, borderRadius: "50%" }} />
      <div>
        <h1 style={{ margin: 0 }}>{profile.name}</h1>
        <p style={{ margin: "0.5rem 0" }}>{profile.bio}</p>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">@{profile.github.replace("https://github.com/", "")}</a>
      </div>
    </header>
  );
}