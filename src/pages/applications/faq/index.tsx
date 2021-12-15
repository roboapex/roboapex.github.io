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
          <details className={style.qna}>
            <summary>
              <h2 className={style.head}>{e.question}</h2>
            </summary>
            <p>{e.answer}</p>
          </details>
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
];
