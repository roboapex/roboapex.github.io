import React from "react";
import Layout from "@theme/Layout";
import useSWR from "swr";
import { Endpoints } from "@octokit/types";
import style from "./style.module.css";
import ProjectTile from "../../components/projects/tile";

export default function ProjectsPage() {
  const { data } = useSWR<Endpoints["GET /orgs/{org}/repos"]["response"]["data"]>("https://api.github.com/orgs/roboapex/repos");

  return (
    <Layout title="Projects">
      <div className={style.grid}>
        {data?.map((repo) => {
          const nameData = repo?.full_name.slice(9).match(/^(\w+)(\d{4})-(\w+)-(\w+)(?:-(\w+))?$/m)
          if (repo?.full_name.startsWith("roboapex/roboapex") || nameData === null) return null
          return <ProjectTile repo={repo} key={repo?.full_name} nameData={Object.values(nameData)}/>
        })}
      </div>
    </Layout>
  );
}
