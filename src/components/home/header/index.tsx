import React, { useEffect, useState } from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemeButton from "../../theme/button";
import style from "./style.module.css";
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setImageIndex((i) => i+1 <= 5 ? i+1 : 0);
      console.log("change")
    }, 10000)
    return () => clearInterval(int)
  }, [])

  return (
    <header className={style.header} style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${useBaseUrl(`/img/home/${imageIndex}.jpg`)})` }}>
      <div className="container">
        <h1 className={clsx("hero__title", style.title)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", style.tagline)}>{siteConfig.tagline}</p>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <ThemeButton path="/about">Learn More</ThemeButton>
          {/* <ThemeButton path="/docs">Docs</ThemeButton>
          <ThemeButton path="/blog">Blog</ThemeButton>
          <ThemeButton path="/projects">Projects</ThemeButton> */}
        </div>
        <div className={style.indicator}>
          {[...Array(6)].map((_,i) => (
            <span style={{ backgroundColor: imageIndex === i ? "#fff" : "#ffffff44" }} onClick={() => setImageIndex(i)}></span>
          ))}
        </div>
      </div>
    </header>
  );
}