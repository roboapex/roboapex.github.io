import React from "react";
import style from "./style.module.css";
import { Endpoints } from "@octokit/types";
import Link from "@docusaurus/Link";
import { useEffect } from "react";
import { useState } from "react";
import { Project } from "../../../types/projects";
import clsx from "clsx";
import { CompetitionCodes } from "../../../types/competitions";

/**
 * nameData in the format {0: full_name, 1: eventCode, 2: year, 3: categoryCode, 4: groupName [, 5: projectName]}
 */
export default function ProjectTile({
  nameData,
  repo,
}: {
  nameData: string[];
  repo: Endpoints["GET /orgs/{org}/repos"]["response"]["data"][number];
}) {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    setProject({
      groupName: nameData[4],
      projectName: nameData?.[5]?.replace("_", " ") ?? nameData[0],
      event: {
        code: nameData[1],
        name: CompetitionCodes[nameData[1]].name,
        website: CompetitionCodes[nameData[1]].name,
      },
      year: parseInt(nameData[2]),
      category: {
        code: nameData[3],
        name: CompetitionCodes[nameData[1]].categories[nameData[3]].name,
      },
    });
  }, [repo]);

  return (
    <div className={clsx("card", style.tile)}>
      <Link href={repo?.html_url} style={{textDecoration: "none", color: "initial"}}>
      <div className="card__image">
        <img
          src={`https://picsum.photos/seed/${nameData[0]}/800/400`}
          alt="Placeholder Image"
          title="Placeholder Image"
        />
      </div>
      <div className="card__header">
        <h3 className={style.projectName}>{project?.projectName}</h3>
      </div>
      <div className="card__body">
        <p>{project?.groupName}</p>
        <p>{repo?.description ?? null}</p>
      </div>
      </Link>
    </div>
  );
}
