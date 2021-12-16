import React from "react";
import style from "./style.module.scss";

export default function HomeIntro() {
  return (
    <section className={style.main} id="intro">
      <div className={style.mission}>
      <img
        src="img/home/intro/mission.png"
        alt=""
        className={style.missionImage}
      />
        <div>
        <h3 className={style.head}>Our Mission</h3>
        <p className={style.content}>
          To nuture <span>passionate innovators</span> who{" "}
          <span>improve society</span> through{" "}
          <span>real-world applications</span> of{" "}
          <span>Robotics and technology</span>.
        </p>
        </div>
      </div>
      
      <div className={style.values}>
        <h3 className={style.head}>Our Values</h3>
        <p className={style.content}>
          <span>Effective</span>
          <br />
          <span>Efficient</span>
          <br />
          <span>Exemplary</span>
          <br />
        </p>
      </div>
      <div className={style.vision}>
        <div>
        <h3 className={style.head}>Our Vision</h3>
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
      </div>
      <div className={style.culture}>
        {culture.map((e) => (
          <div>
          <h3 className={style.head}>{e.title}</h3>
          <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const culture = [
  {
    title: "Senior-Junior Teaching",
    desc: "We freely approach seniors and mentors to discuss how we can improve our robots and creations. Through their encouragement and constructive criticism, we improve and grow together as a club, building trust and forming positive relationships amongst ourselves."
  },
  {
    title: "Passion for Robotics",
    desc: "Our passion for Robotics is what fuels us to strive for greater heights! When competitions draw near (before COVID-19), we return to our room during the holidays or after school in preparation for upcoming competitions or projects!"
  },
  {
    title: "Creative Projects",
    desc: "Besides preparing for competitions, we also work on our own projects to express our creativity through unique inventions and innovations."
  }
]