import React from "react";
import style from "./style.module.css";

export default function AchievementsFilter() {
  return (
    <div>
      <div className="dropdown dropdown--hoverable">
        <button className="button button--primary">Hover Me</button>
        <ul className="dropdown__menu">
          <li>
          <button className="button button--block button--primary">Block Button</button>

          </li>
        </ul>
      </div>
    </div>
  );
}
