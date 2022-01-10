import React, { useEffect, useState } from "react";
import ThemeButton from "../../theme/button";
import useBaseUrl from "@docusaurus/useBaseUrl";

import style from "./style.module.scss";

const NUMBER_OF_IMAGES = 4;

export default function HomeHeader() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setImageIndex((i) => (i + 1 <= NUMBER_OF_IMAGES - 1 ? i + 1 : 0));
      console.log("change");
    }, 10000);
    return () => clearInterval(int);
  }, []);

  return (
    <section
      className={style.header}
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95) ), url(${useBaseUrl(
          `/img/home/header/${imageIndex}.jpg`
        )})`,
      }}
    >
      <h1 className={style.title}>
        <span>Robotics</span> <span>@APEX</span>
      </h1>
      <p className={style.tagline}>
        Founded in 2010, Robotics @APEX is a niche CCA in the School of Science
        and Technology, Singapore
      </p>
      <div className={style.buttons}>
        <ThemeButton path="/join">Sign Up for Trials!</ThemeButton>
        <ThemeButton path="/join/faq" color="primary" type="outline" style={{ color: "white", borderColor: "white" }}>
          FAQ
        </ThemeButton>
        {/* <ThemeButton path="#intro" color="secondary" type="outline">
          Learn More
        </ThemeButton> */}
        {/* <ThemeButton path="/docs">Docs</ThemeButton>
          <ThemeButton path="/blog">Blog</ThemeButton>
          <ThemeButton path="/projects">Projects</ThemeButton> */}
      </div>
      <div className={style.indicator}>
        {[...Array(NUMBER_OF_IMAGES)].map((_, i) => (
          <span
          key={i}
            style={{
              backgroundColor: imageIndex === i ? "#fff" : "#ffffff44",
            }}
            onClick={() => setImageIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
