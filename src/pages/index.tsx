import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomeHeader from "../components/home/header";
import HomeValues from "../components/home/values";
import HomeSection from "../components/home/section";
import HomeSystems from "../components/home/systems";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique elit finibus eros pharetra, volutpat blandit diam suscipit. Phasellus nec euismod magna. Curabitur venenatis, leo interdum eleifend lacinia, magna massa tristique dui, non feugiat tellus diam et justo. Mauris sed risus laoreet, malesuada tortor mattis, luctus urna. Mauris sit amet sapien nec lacus convallis ullamcorper. Fusce luctus turpis vel nisi volutpat ornare. "
export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={`${siteConfig.title} Documentation`}
    >
      <HomeHeader />
      <main>
        <HomeSection>
          {/* <HomeValues /> */}
          {/* <HomeSystems title="Lego" desc={lorem} imgRight={false} />
          <HomeSystems title="Lego" desc={lorem} imgRight={true} /> */}
          <div>
            
          </div>
        </HomeSection>
        {/* <HomeSection title="Our Runs">
          
        </HomeSection>
        <HomeSection title="Our History">
          
        </HomeSection>
        <HomeSection title="Our Accomplishments">
          
        </HomeSection> */}
      </main>
    </Layout>
  );
}
