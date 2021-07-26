import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import style from "./style.module.css";

export default function ThemeButton({
  path,
  children,
}: {
  path: string;
  children: string;
}) {
  return (
    <Link
      className={clsx("button button--secondary button--lg", style.button)}
      to={path}
    >
      {children}
    </Link>
  );
}
