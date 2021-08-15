import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemeButton from "../../themeButton";

export default function HomeHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      style={{
        backgroundColor: "#ee466b22",
        padding: "3rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemeButton path="/docs">Docs</ThemeButton>
          <ThemeButton path="/blog">Blog</ThemeButton>
          <ThemeButton path="/projects">Projects</ThemeButton>
        </div>
      </div>
    </header>
  );
}