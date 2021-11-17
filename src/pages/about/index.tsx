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
  {
    head: "Culture",
    subsections: [
      {
        subhead: "Senior-Junior Sharing",
        desc: (
          <>In Robotics@APEX, we freely approach seniors and mentors to discuss how we can improve our robots and creations. Through their encouragement and constructive criticism, we improve and grow together as a club, building trust and forming positive relationships amongst ourselves. Here are some of our Secondary 4 seniors and our trainer guiding our Secondary 1s.</>
        )
      },
      {
        subhead: "Passion for Robotics",
        desc: (
          <>Our passion for Robotics is what fuels us to strive for greater heights! As competitions draw near, many of us spend extra time returning to school during the holidays in preparation for upcoming competitions! Before the COVID-19 pandemic, some of us would also devote hours after school to Robotics, diligently developing our robot for competitions and projects.</>
        )
      },
      {
        subhead: "Creative Projects",
        desc: (
          <>Besides preparing for competitions, students also get to work on their own projects to express themselves creatively through unique inventions and innovations. The picture shows one of our creations, a robotic arm activated by LEGO touch sensors.</>
        )
      }
    ]
  },
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