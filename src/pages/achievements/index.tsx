import { Endpoints } from "@octokit/types";
import Notice from "../../components/notice";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import AchievementsRow from "../../components/achievements/row";
import AchievementsFilter from "../../components/achievements/filter";
import ThemeLayout from "../../components/theme/layout";
import {
  Achievements,
  AchievementsFilterProperties,
} from "../../types/achievements";
import Link from "@docusaurus/Link";

import style from "./style.module.scss";

export default function AchievementsPage() {
  const achievements = useAchievements();
  const [filtered, setFiltered] = useState<Achievements[]>([]);
  const [filter, setFilter] = useState<AchievementsFilterProperties>();

  useEffect(() => {
    if (!filter?.year && !filter?.comp) {
      setFiltered(achievements);
      return;
    }
    setFiltered(
      achievements?.map((a) => ({
        ...a,
        competitions: a.competitions.filter(
          (v) =>
          (!filter?.year || a?.year.toString() === filter.year) &&
          (!filter?.comp || v?.code === filter.comp)
        ),
      })).filter((v) => v.competitions.length > 0)
    );
  }, [achievements.length, filter]);

  return (
    <ThemeLayout title="Achievements">
      <Notice>Currently, only achievements from 2016 and onwards are displayed. Earlier achievements may be found <Link href="https://www.sst.edu.sg/cca/robotics-apex/">here</Link>.</Notice>
      <AchievementsFilter
        achievements={achievements}
        onUpdate={(filter) => setFilter(filter)}
      />
      <div className={style.awards}>
        {filtered?.map((a, i) => (
          <React.Fragment key={i}>
            <h1 className={style.yearHeader}>{a.year}</h1>
            {a.competitions.map((e, i) => (
              <AchievementsRow
                achievementCompetition={e}
                key={`${e.code}${a.year}${i}`}
                year={a.year}
              />
            ))}
          </React.Fragment>
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
  return [];
};
