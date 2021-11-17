import clsx from "clsx";
import React from "react";
import style from "./style.module.scss";

export default function HomeIntro() {
  return (
    <section className={style.main}>
      <div className={style.mission}>
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
        className={style.missionImage}
      />
      <div
        className={style.values}
        style={{ textAlign: "center" }}
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
        style={{ textAlign: "right" }}
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
        className={style.visionImage}
      />
    </section>
  );
}
