import clsx from "clsx";
import React from "react";
import { AchievementsCompetition } from "../../../types/achievements";
import { CompetitionCodes } from "../../../types/competitions";
import style from "./style.module.css";

export default function AchievementsRow({
  achievementCompetition,
  year
}: {
  achievementCompetition: AchievementsCompetition;
  year: number
}) {

  const resolveURL = (url: string) => {
    console.log(url)
    if (!url.startsWith("http")) return `https://raw.githubusercontent.com/roboapex/roboapex.github.io/main/data/achievements/${year.toString()}/${achievementCompetition.code}/${url}`
    return url
  }

  const competition = CompetitionCodes[achievementCompetition.code]

  return (
    <div className={style.row}>
      <div className={style.details}>
        {achievementCompetition?.logoURL === undefined ? undefined : (
          <img
            src={resolveURL(achievementCompetition.logoURL)}
            alt={`${competition.name}'s Logo'`}
            title={competition.name}
            className={style.logo}
          />
        )}
        <h1>{competition.name} {year}</h1>
        <p>{competition.desc}</p>
        {achievementCompetition.awards.map((e,i) => (
          <div key={i} className={style.awardListing}>
            <p>{e.title}</p>
            <i color="#f2ba2c" className="fas fa-trophy" />
          </div>
        ))}
        {/* <p>{competition.team} - {award.recipients}</p> */}
      </div>
      <div className={style.images}>
        {achievementCompetition.awards.map((e,i1) => (
          <div key={i1}>
            {e.media?.map((img, i2) => (
              <img key={i2} src={resolveURL(img.url)} alt={img.caption} title={img.caption} />
            ))}
          </div>
        ))}
        {achievementCompetition.media?.map((img, i) => (
          <img key={i} src={resolveURL(img.url)} alt={img.caption} title={img.caption} />
        ))}
      </div>
    </div>
  );
}