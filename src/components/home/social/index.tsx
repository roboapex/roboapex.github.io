import React from "react";
import Link from "@docusaurus/Link";
import K from "../../../../constants";
import style from "./style.module.scss";
import HomeApplications from "../applications";

export default function HomeSocial() {
  return (
    <section className={style.main}>
      <HomeApplications />
      <div className={style.content}>
        <h1>Get in touch with us.</h1>
        <div className={style.icons}>
          {K.socials.map((e) => (
            <Link href={e.url} key={`${e.handle}-${e.platform}`}>
              <div className={style.icon} style={{ background: e.color }}>
                <i className={e.icon}></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
