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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    )},
    { subhead: "What we do", desc: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    )},
    { subhead: "Where we work", desc: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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