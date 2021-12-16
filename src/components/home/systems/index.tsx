import React from "react";
import Link from "@docusaurus/Link";

import style from "./style.module.scss";

export default function HomeSystems() {
  return (
    <section className={style.main}>
      <h1>Systems</h1>
      <div className={style.icons}>
        <Link href="youtube.com">
          <i className="far fa-envelope" />
        </Link>
      </div>
    </section>
  );
}
