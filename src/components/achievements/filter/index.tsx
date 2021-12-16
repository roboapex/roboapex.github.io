import 'url-search-params-polyfill';

import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import {
  Achievements,
  AchievementsFilterProperties,
} from "../../../types/achievements";
import { CompetitionCodes } from "../../../types/competitions";
import style from "./style.module.css";

export default function AchievementsFilter({
  achievements,
  onUpdate,
}: {
  achievements: Achievements[];
  onUpdate: (filter: AchievementsFilterProperties) => void;
}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [filter, setFilter] = useState<AchievementsFilterProperties>({
    year: searchParams.get("year"),
    comp: searchParams.get("comp"),
  });

  useEffect(() => {
    searchParams.set("year", filter.year);
    if (filter.year === null) searchParams.delete("year");
    searchParams.set("comp", filter.comp);
    if (filter.comp === null) searchParams.delete("comp");
    history.pushState(
      null,
      "",
      window.location.pathname +
        (!!searchParams.toString() ? "?" : "") +
        searchParams.toString()
    );
    console.log(filter);

    onUpdate(filter);
  }, [filter]);

  return (
    <div className={style.flex}>
      <i className={clsx("fas fa-filter", style.icon)} />
      <div className="dropdown dropdown--hoverable">
        <button className={`button button--${!!filter.year ? "primary" : "link"}`}>
          {filter.year || "Year"}
        </button>
        <ul className="dropdown__menu">
          <li>
            <a
              className="dropdown__link"
              href="javascript:void(0)"
              onClick={() => setFilter((f) => ({ ...f, year: null }))}
            >
              None
            </a>
          </li>
          {achievements?.map((e, i) => (
            <li key={i}>
              <a
                className="dropdown__link"
                href="javascript:void(0)"
                onClick={() =>
                  setFilter((f) => ({ ...f, year: e.year.toString() }))
                }
              >
                {e.year}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown dropdown--hoverable">
        <button className={`button button--${!!filter.comp ? "primary" : "link"}`}>
          {filter.comp || "Competition"}
        </button>
        <ul className="dropdown__menu">
          <li>
            <a
              className="dropdown__link"
              href="javascript:void(0)"
              onClick={() => setFilter((f) => ({ ...f, comp: null }))}
            >
              None
            </a>
          </li>
          {Object.entries(CompetitionCodes).map((e, i) => (
            <li key={i}>
              <a
                className="dropdown__link"
                href="javascript:void(0)"
                onClick={() => setFilter((f) => ({ ...f, comp: e[0] }))}
              >
                {e[0]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
