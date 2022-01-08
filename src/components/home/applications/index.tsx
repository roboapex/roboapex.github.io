import React from "react";
import Link from "@docusaurus/Link";
import K from "../../../../constants";
import style from "./style.module.scss";
import { joinURL } from "../../../pages/join";
import ThemeButton from "../../theme/button";

export default function HomeApplications() {
  return (
    <div className={style.main}>
      <div className={style.box}>
        <h1>Have a burning passion for Robotics?</h1>
        <p>
          SST's Robotics @APEX CCA is opening for applications for the
          Secondary 1s! Join us in our trials and see if you got what it takes
          to be a member of Robotics @APEX!
        </p>
        <div className={style.details}>
          <div>
            <h2>Trial Dates</h2>
            <ul>
              <li>19 Jan 2022 | 3.00pm - 6.00pm</li>
              <li>21 Jan 2022 | 2.30pm - 5.30pm</li>
              <li>26 Jan 2022 | 3.00pm - 6.00pm</li>
              <li>28 Jan 2022 | 2.30pm - 5.30pm</li>
            </ul>
          </div>
          <div>
            <h2>Venue</h2>
            <ul>
              <li>Robotics Room (Level 3, Block C)</li>
            </ul>
          </div>
          <div>
            <h2>CCA Timings</h2>
            <ul>
              <li>Wednesdays - 3.00pm to 6.00pm</li>
              <li>Fridays - 2.30pm to 5.30pm</li>
            </ul>
          </div>
        </div>
        <ThemeButton path={joinURL} color="primary">
          Sign Up for Trials!
        </ThemeButton>
        <ThemeButton path="/join/faq" color="secondary">
          FAQs
        </ThemeButton>
      </div>
    </div>
  );
}
