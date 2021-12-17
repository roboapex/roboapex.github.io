import React from "react";
import style from "./style.module.scss";
import ThemeLayout from "../../../components/theme/layout";
import Link from "@docusaurus/Link";

export default function FAQPage() {
  return (
    <ThemeLayout title="FAQ">
      <h1 className={style.title}>
        FAQs regarding application to <br />
        <span className={style.roboapex}>Robotics @APEX</span>
      </h1>
      {faq.map((e) => (
        <div>
          <details className={style.details}>
            <summary className={style.summary}>
              <h2>{e.question}</h2>
              <i className="fas fa-caret-right" />
            </summary>
            <p>{e.answer}</p>
          </details>
          <hr style={{ borderWidth: 0.5, margin: 0 }} />
        </div>
      ))}
    </ThemeLayout>
  );
}

const faq = [
  {
    question: "Is it hard to enter Robotics @APEX?",
    answer: (
      <>
        Just give it a shot, give it all that you got!! You never know if you
        may just be able to make the cut! 🔥🔥🔥
      </>
    ),
  },
  {
    question:
      "Do I need prior experience in robotics to join the Robotics @APEX family? Will I be able to meet the club's requirements?",
    answer: (
      <>
        Prior experience is not required, as long as you are{" "}
        <i>passionate to learn about Robotics!</i> Although it may seem daunting
        initially, with hard work, dedication and open-mindedness throughout the training
        provided, you can definitely succeed here! There are many of us here who also did not take
        Robotics in Primary School.
      </>
    ),
  },
  {
    question:
      "What competitions does Robotics @APEX participate in? Are they sufficient for LEAPS 2.0?",
    answer: (
      <>
        <p>
          In Robotics @APEX, we use a variety of systems including LEGO, MakeX,
          VEX, Arduino and Raspberry Pi. Each system has its own array of
          competitions and categories to participate in such as First LEGO
          League (FLL) or MakeX Championships. Additionally, we also participate
          in broader, more open competitions such as the renowned National
          Robotics Competition or RoboCup. An exhaustive list of all
          competitions we have won an award in can be found on the{" "}
          <Link to="/achievements">achievements page</Link>.
        </p>
        <p>
          In Robotics @APEX, you will be given ample opportunities to participate in a
          myriad of competitions and{" "}
          <b>guaranteed (and mandated) at least one per year</b>. Hence, it is
          highly unlikely you would be unable to meet the requirements of{" "}
          <Link href="https://www.moe.gov.sg/programmes/cca/leaps2-0">
            LEAPS 2.0
          </Link>{" "}
          which is to represent the school at an event for 3 years or more
          (Level 4 for Representation).
        </p>
      </>
    ),
  },
  {
    question: "Are the seniors nice? Will I be able to integrate into the community?",
    answer:
      <>
      <p>As a senior writing this, I can assure you that we don't bite :&gt; You will be warmly welcomed into our community and we will do our best to guide you in your Robotics @APEX journey. (we are also very cool people 😎 so don't worry)</p>

      <p>Just have confidence in yourself, of course it would take time to find your place in the community, but don't let that deter you!</p>
      </>
  },
];
