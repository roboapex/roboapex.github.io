import clsx from "clsx";
import React from "react";
import style from "./style.module.scss";

export default function HomeIntro() {
  return (
    <section className={style.section}>
      <div className={style.mission} style={{ gridArea: "1/2/1/4" }}>
        <h3 className={style.head}>OUR MISSION</h3>
        <p className={style.content}>
          To nuture <span>passionate innovators</span> who{" "}
          <span>improve society</span> through{" "}
          <span>real-world applications</span> of{" "}
          <span>Robotics and technology</span>.
        </p>
      </div>
      <img
        src="img/home/intro/mission.png"
        alt=""
        style={{ gridArea: "1/1/1/1" }}
      />
      <div
        className={style.values}
        style={{ textAlign: "center", gridArea: "2/2/2/2" }}
      >
        <h3 className={style.head}>OUR VALUES</h3>
        <p className={style.content}>
          <span>Effective</span>
          <br />
          <span>Efficient</span>
          <br />
          <span>Exemplary</span>
          <br />
        </p>
      </div>
      <div
        className={style.vision}
        style={{ textAlign: "right", gridArea: "3/1/4/3" }}
      >
        <h3 className={style.head}>OUR VISION</h3>
        <p className={style.content}>
          To be <span>global leaders</span> in{" "}
          <span>Robotics and automation research</span>.
        </p>
      </div>
      <img
        src="img/home/intro/vision.png"
        alt=""
        style={{ gridArea: "3/3/4/3" }}
      />
    </section>
  );
}
