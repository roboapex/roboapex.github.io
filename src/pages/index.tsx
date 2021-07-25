import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import ThemeButton from "../components/ThemeButton";

function HomepageHeader() {
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
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={`${siteConfig.title} Documentation`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
