import React from "react";
import { Link } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ThemeButton({
  path,
  children,
}: {
  path: string;
  children: string;
}) {
  return (
    <Link
      className="button button--secondary button--lg"
      to={useBaseUrl(path)}
      style={{ backgroundColor: "#fff" }}
    >
      {children}
    </Link>
  );
}
