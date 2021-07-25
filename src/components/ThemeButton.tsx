import React from "react";
import Link from "@docusaurus/Link";

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
      to={path}
      style={{ backgroundColor: "#fff" }}
    >
      {children}
    </Link>
  );
}
