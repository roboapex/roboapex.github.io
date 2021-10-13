import React from "react";
import style from "./style.module.css";
import { Endpoints } from "@octokit/types";
import Link from "@docusaurus/Link";
import { useEffect } from "react";
import { useState } from "react";
import { Project, ProjectEventLookup } from "../../types/projects";
import clsx from "clsx";

const eventCodes: ProjectEventLookup = {
  nrc: {
    name: "National Robotics Competition",
    website: "https://ducklearning.com/pages/nrc-sg",
    categories: {
      reg: { name: "Regular" },
      open: { name: "Open" },
      fe: { name: "Future Engineer" },
    },
  },
  rcsg: {
    name: "Robocup Singapore",
    website: "https://robocupsg.org/en/singaporeopen",
    categories: {
      rescue: { name: "RCJ Rescue Line" },
    },
  },
};

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
  const [data, setData] = useState<Project>();

  useEffect(() => {
    setData({
      groupName: nameData[4],
      projectName: nameData?.[5]?.replace("_", " ") ?? nameData[0],
      event: {
        code: nameData[1],
        name: eventCodes[nameData[1]].name,
        website: eventCodes[nameData[1]].name,
      },
      year: parseInt(nameData[2]),
      category: {
        code: nameData[3],
        name: eventCodes[nameData[1]].categories[nameData[3]].name,
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
        <h3 className={style.projectName}>{data?.projectName}</h3>
      </div>
      <div className="card__body">
        <p>{data?.groupName}</p>
        <p>{repo?.description ?? null}</p>
      </div>
      </Link>
    </div>
  );
}
