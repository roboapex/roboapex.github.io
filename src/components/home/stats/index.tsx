import clsx from "clsx";
import React from "react";
import style from "./style.module.scss";

export default function HomeStats() {
  return (
    <section className={style.main}>
      <div className={style.circle}>
        <h1 className={style.num}>&gt;100</h1>
        <h2>awards</h2>
      </div>
    </section>
  );
}