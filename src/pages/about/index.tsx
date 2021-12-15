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
      In Robotics @APEX, we use technologies such as LEGO Mindstorms EV3, MakeX, VEX, Arduino and Raspberry Pi, to compete in a myriad of competitions both local and international, and to engineer robots that benefit the community.
      
      through snr jnr learning, (see our insta page the bottom)
      With these, students enhance their learning in SST as they acquire various practical skills and technical knowledge that is important in the digital future. 
      </>
    )},
    { subhead: "Where we work", desc: (
      <>
        We work, live and play in the Robotics Room, which is located in the SST compound on the 3rd floor of Block C. There we have many facilities including
      </>
    )}
  ]},
];