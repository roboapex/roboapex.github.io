import React from "react";
import Link from "@docusaurus/Link";
import K from "../../../../constants";
import style from "./style.module.scss";

export default function HomeSocial() {
  return (
    <section className={style.main}>
      <h1>Get in touch.</h1>
      <div className={style.icons}>
        {K.socials.map((e) => (
          <Link href={e.url}>
            <img className={style.image} src={e.src} alt={`${e.handle} on ${e.platform}`} />
          </Link>
        ))}
      </div>
    </section>
  );
}
