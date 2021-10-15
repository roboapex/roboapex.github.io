import React from "react";
import Link from "@docusaurus/Link";

export default function ThemeButton({
  path,
  children,
  color
}: {
  path: string;
  children: string;
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "link";
}) {
  return (
    <Link
      className={`button button--${color ?? "primary"} button--lg`}
      to={path}
    >
      {children}
    </Link>
  );
}
