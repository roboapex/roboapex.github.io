import ThemeButton from "../../theme/button";
import React from "react";
import style from "./style.module.scss";
import clsx from "clsx";

export default function HomeStats() {
  return (
    <section className={style.main}>
      <div className={style.circles}>
      <div className={style.yellow}>
          <h1>&gt;200</h1>
          <h2>projects</h2>
        </div>
        <div className={style.red}>
          <h2>and</h2>
          <h1>&gt;100</h1>
          <h2>awards</h2>
        </div>
        <div className={style.blue}>
          <h2>over</h2>
          <h1>&gt;10</h1>
          <h2>competitions</h2>
        </div>
      </div>
      <ThemeButton path="/achievements" color="secondary">
        Learn More
      </ThemeButton>
    </section>
  );
}
