import React from "react";
import Link from "@docusaurus/Link";
import K from "../../../../constants";
import style from "./style.module.scss";
import { joinURL } from "../../../pages/join";
import ThemeButton from "../../theme/button";

export default function HomeApplications() {
  return (
    <section className={style.main}>
      <div className={style.box}>
        <h1>Join Us!</h1>
        <p>Have a burning passion for Robotics? (Open to S1 SST students only)</p>
        <ThemeButton path={joinURL} color="secondary">Sign Up for Trials!</ThemeButton>
      </div>
    </section>
  );
}