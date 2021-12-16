import React from "react";
import Link from "@docusaurus/Link";
import K from "../../../../constants";
import style from "./style.module.scss";
import clsx from "clsx";

export default function HomeSocial() {
  return (
    <section className={style.main}>
      <h1>Get in touch.</h1>
      <div className={style.icons}>
        {K.socials.map((e) => (
          <Link href={e.url} key={`${e.handle}-${e.platform}`}>
            <div className={style.icon} style={{ background: e.color }}>
              <i className={e.icon}></i>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
