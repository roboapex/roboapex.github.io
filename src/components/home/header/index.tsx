import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemeButton from "../../themeButton";
import style from "./style.module.css";
import clsx from 'clsx';

export default function HomeHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={style.header}>
      <div className={"container"}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", style.tagline)}>{siteConfig.tagline}</p>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <ThemeButton path="/projects">Learn More</ThemeButton>
          {/* <ThemeButton path="/docs">Docs</ThemeButton>
          <ThemeButton path="/blog">Blog</ThemeButton>
          <ThemeButton path="/projects">Projects</ThemeButton> */}
        </div>
      </div>
    </header>
  );
}