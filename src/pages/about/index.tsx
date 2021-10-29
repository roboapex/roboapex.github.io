import React from "react";
import style from "./style.module.css";
import ThemeLayout from "../../components/theme/layout";
import { AboutSection } from "../../types/about";

export default function AboutPage() {
  return (
    <ThemeLayout title="About">
      <h1 className={style.title}>
        About <br /><span className={style.roboapex}>Robotics @APEX</span>
      </h1>
      {sections.map((e) => (
        <div>
          <h2 className={style.head}>{e.head}</h2>
          {e.subsections.map((sub) => (
            <div className={style.row}>
              <h3 className={style.subhead}>{sub.subhead}</h3>
              <p className={style.desc}>{sub.desc}</p>
            </div>
          ))}
        </div>
      ))}
    </ThemeLayout>
  );
}

const sections: AboutSection[] = [
  { head: "Introduction", subsections: [
    { subhead: "Who we are", desc: (
      <>
        Robotics @APEX (formerly known as Robotics Club) was set up in 2010 and is a niche in the <a href="https://www.sst.edu.sg/">School of Science and Technology, Singapore (SST)</a>. In this CCA, members are given ample opportunities to unleash their potential by applying their skills and knowledge across a vast array of competitions. Through these competitions, the students are able to enhance their learning experiences in SST as they acquire various life skills and technological expertise along the way.
      </>
    )},
    { subhead: "What we do", desc: (
      <>
        Here, we compete in a myriad of competitions including 
      </>
    )},
    { subhead: "Where we work", desc: (
      <>
        We work, live and play in the Robotics Room, which is located in the SST compound at Block C on Level 3. There we have many facilities including 
      </>
    )}
  ]},
  {
    head: "Mission, Vision and Values",
    subsections: [
      {
        subhead: "Mission",
        desc: (
          <>
            To nuture <span>passionate innovators</span> who{" "}
            <span>improve society</span> through{" "}
            <span>real-world applications</span> of{" "}
            <span>Robotics and technology</span>.
          </>
        ),
      },
      {
        subhead: "Vision",
        desc: (
          <>
            To be <span>global leader</span> in{" "}
            <span>Robotics and automation research</span>.
          </>
        ),
      },
      {
        subhead: "Values",
        desc: (
          <>
            <span>Effective</span>
            <br />
            <span>Efficient</span>
            <br />
            <span>Exemplary</span>
            <br />
          </>
        ),
      },
    ],
  },
];