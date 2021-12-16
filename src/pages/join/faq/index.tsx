import React from "react";
import style from "./style.module.scss";
import ThemeLayout from "../../../components/theme/layout";

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
          <hr style={{ borderWidth: 0.5 }} />
        </div>
      ))}
    </ThemeLayout>
  );
}

const faq = [
  {
    question:
      "Do I need prior experience in robotics to join the Robotics @APEX family?",
    answer:
      "Prior experience is not required, as long as you are passionate about robotics!",
  },
  {
    question: "Do I need prior expn the Robotics @APEX family?",
    answer:
      "Prior experience is not required, as long as you are passionate about robotics!",
  },
];
