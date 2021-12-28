import React from "react";
import HomeHeader from "../components/home/header";
import HomeIntro from "../components/home/intro";
import HomeStats from "../components/home/stats";
import HomeSocial from "../components/home/social";
import HomeApplications from "../components/home/applications";

import style from "./style.module.scss";
import ThemeLayout from "../components/theme/layout";

export default function HomePage() {
  return (
    <ThemeLayout title="Home" noPadding>
      <div className={style.sections}>
        <HomeHeader />
        <HomeIntro />
        <div className={style.tape}>
          <img src="/img/home/intro/tape.png" alt="" style={{ transform: "scaleX(-1)" }} />
        </div>
        <HomeStats />
        <div className={style.tape}>
          <img src="/img/home/intro/tape.png" alt="" />
        </div>
        <HomeApplications />
        <HomeSocial />
      </div>
    </ThemeLayout>
    // Runs, History, Accomplishments
  );
}
