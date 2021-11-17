import React from "react";
import style from "./style.module.scss";

export default function HomeIntro() {
  return (
    <section className={style.section}>
      <div style={{ gridArea: "m1" }}>
        <h3 className={style.head}>OUR MISSION</h3>
        <p className={style.content}>
          To nuture <span>passionate innovators</span> who{" "}
          <span>improve society</span> through{" "}
          <span>real-world applications</span> of{" "}
          <span>Robotics and technology</span>.
        </p>
      </div>
      <img src="img/home/intro/mission.png" alt="" style={{ gridArea: "m2" }} />
      <div style={{ textAlign: "right", gridArea: "v1" }}>
        <h3 className={style.head}>OUR VISION</h3>
        <p className={style.content}>
          To be <span>global leader</span> in{" "}
          <span>Robotics and automation research</span>.
        </p>
      </div>
    </section>
  );
}
