import React from "react";

import style from "./style.module.css";

export default function HomeSystems({ title, desc, imgRight }: { title: string, desc: string, imgRight: boolean }) {
  return (
    <div className={style.main} style={{ flexDirection: imgRight ? "row" : "row-reverse" }}>
      <div className={style.text} style={ imgRight ? { marginLeft: "auto" } : { marginRight: "auto" }}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.desc}>{desc}</p>
      </div>
      <img src="img/test.png" className={style.img} />
    </div>
  );
};
