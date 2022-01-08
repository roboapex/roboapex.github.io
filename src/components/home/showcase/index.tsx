import React from "react";
import style from "./style.module.scss";

export default function HomeShowcase() {
  return (
    <section className={style.main}>
      <div className={style.vid}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nOeSbfdWEn4"
        />
      </div>
    </section>
  );
}
