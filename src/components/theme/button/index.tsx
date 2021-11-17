import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";

export default function ThemeButton({
  path,
  children,
  color,
  type,
  style
}: {
  path: string;
  children: string;
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "link";
  type?: "outline" | "fill";
  style?: CSSProperties
}) {
  return (
    <Link
      style={style}
      className={`button button--${color ?? "primary"} ${type === "outline" ? "button--outline" : undefined} button--lg`}
      to={path}
    >
      {children}
    </Link>
  );
}
