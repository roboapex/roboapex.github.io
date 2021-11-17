import React from "react";
import HomeHeader from "../components/home/header";
import HomeIntro from "../components/home/intro";

import style from "./style.module.scss";
import ThemeLayout from "../components/theme/layout";

export default function HomePage() {
  return (
    <ThemeLayout title="Home" noPadding>
      <div className={style.sections}>
        <HomeHeader />
        <HomeIntro />
      </div>
    </ThemeLayout>
    // <Layout
    //   title={siteConfig.title}
    //   description={`${siteConfig.title} Documentation`}
    // >
    //   <HomeHeader />
    //   <main>
    //     <HomeSection>
    //       <HomeValues />

    //     </HomeSection>
    //     {/* <HomeSection title="Our Runs"></HomeSection>
    //     <HomeSection title="Our History"></HomeSection>
    //     <HomeSection title="Our Accomplishments"></HomeSection> */}
    //   </main>
    // </Layout>
  );
}
