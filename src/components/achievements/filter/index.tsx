import React from "react";
import style from "./style.module.css";

export default function AchievementsFilter({ filter }: { filter: string }) {
  return (
    <div>
      <div className="dropdown dropdown--hoverable">
        <button className="button button--primary">
          Filter By:{" "}
          {filter.charAt(1).toUpperCase() + filter.slice(2) || "Most Recent"}
        </button>
        <ul className="dropdown__menu">
          <li>
            <a className="dropdown__link" href="#">
              Most Recent
            </a>
          </li>
          <li>
            <a className="dropdown__link" href="#year">
              Year
            </a>
          </li>
          <li>
            <a className="dropdown__link" href="#competition">
              Competition
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
