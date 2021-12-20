import React from "react";
import style from "./style.module.scss";

export default function HomeIntro() {
  return (
    <section className={style.main} id="intro">
      <div className={style.mission}>
        <img
          src="img/home/intro/mission.png"
          alt="Our students hard at work building their prototype for a unique student-initiated project to clean beachsides."
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
        <div>
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
      </div>
      <div className={style.vision}>
        <img
          src="img/home/intro/vision.png"
          alt="Our students in Guangzhou, China, working on their robot for 2019 MakeX World Championship."
        />
        <div>
          <h3 className={style.head}>Our Vision</h3>
          <p className={style.content}>
            To be <span>global leaders</span> in{" "}
            <span>Robotics and automation research</span>.
          </p>
        </div>
      </div>
      <div className={style.culture}>
        {culture.map((e) => (
          <div key={e.title}>
            <img src={e.src} alt={e.alt} />
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
    title: "Senior-Junior Sharing",
    desc: "We freely approach our seniors and mentors to discuss how we can improve our robots and creations. Through their feedback, we improve and grow together as a club, building trust and forming positive relationships.",
    src: "img/home/intro/culture-seniorJunior.png",
    alt: "",
  },
  {
    title: "Passionate Individuals",
    desc: "Our passion for Robotics is what fuels us to strive for greater heights! When competitions draw near (before COVID-19), we return to our room during the holidays or after school in preparation for upcoming competitions or projects!",
    src: "img/home/intro/culture-passion.png",
    alt: "",
  },
  {
    title: "Creative Projects",
    desc: "Besides preparing for competitions, we also work on our own projects to express our creativity through unique inventions and innovations.",
    src: "img/home/intro/culture-creative.png",
    alt: "",
  },
];
