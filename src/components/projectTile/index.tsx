import React from "react";
import style from "./style.module.css";
import { Endpoints } from "@octokit/types";
import Link from "@docusaurus/Link";
import { useEffect } from "react";
import { useState } from "react";
import { Project, ProjectEventLookup } from "../../types/projects";

const eventCodes: ProjectEventLookup = {
  nrc: {
    name: "National Robotics Competition",
    website: "https://ducklearning.com/pages/nrc-sg",
    categories: {
      reg: { name: "Regular" },
      open: { name: "Open" },
      fe: { name: "Future Engineer" },
    }
  },
  rcsg: {
    name: "Robocup Singapore",
    website: "https://robocupsg.org/en/singaporeopen",
    categories: {
      rescue: { name: "RCJ Rescue Line" },
    }
  },
}

/**
 * nameData in the format {0: full_name, 1: eventCode, 2: year, 3: categoryCode, 4: groupName [, 5: projectName]}
 */
export default function ProjectTile({ nameData, repo }: { nameData: string[], repo: Endpoints["GET /orgs/{org}/repos"]["response"]["data"][number] }) {
  const [data, setData] = useState<Project>();

  console.log(nameData)

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
    <div className={style.tile}>
      <h2>{data?.projectName}</h2>
      <p>{data?.groupName}</p>
      <p>{repo?.description ?? "No Description"}</p>
      <Link href={repo?.html_url}>View on GitHub</Link>
    </div>
  );
}
