import { Endpoints } from "@octokit/types";
import clsx from "clsx";
import React, { useState } from "react";
import useSWR from "swr";
import AchievementsRow from "../../components/achievements/row";
import ThemeLayout from "../../components/theme/layout";
import { Achievements } from "../../types/achievements";

import style from "./style.module.css";

export default function AchievementsPage() {
  const [yearIndex, setYearIndex] = useState(0);

  const achievements = useAchievements();
  
  return (
    <ThemeLayout title="Achievements">
      <ul className="pills">
        {achievements?.map((e, i) => (
          <li
            key={i}
            className={clsx(
              "pills__item",
              i === yearIndex ? "pills__item--active" : ""
            )}
            onClick={() => setYearIndex(i)}
          >
            {e.year}
          </li>
        ))}
      </ul>
      <div className={style.awards}>
        {achievements?.[yearIndex]?.competitions.map((e,i) => (
          <AchievementsRow achievementCompetition={e} key={`${e.code}${achievements[yearIndex].year}${i}`} year={achievements[yearIndex].year} />
        ))}
      </div>
    </ThemeLayout>
  );
}

const useAchievements = () => {
  const { data } = useSWR<
    Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"]
  >(
    "https://api.github.com/repos/roboapex/roboapex.github.io/contents/data/achievements/achievements.json"
  );
  if (!!data) return JSON.parse(atob(data?.["content"])) as Achievements[];
  return undefined
}