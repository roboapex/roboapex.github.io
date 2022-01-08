import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import module_style from "./style.module.scss";

export default function ThemeButton({
  path,
  children,
  color,
  type,
  style,
}: {
  path: string;
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link";
  type?: "outline" | "fill";
  style?: CSSProperties;
}) {
  return (
    <Link
      style={style}
      className={clsx(
        "button",
        `button--${color ?? "primary"}`,
        `${type === "outline" ? "button--outline" : undefined}`,
        "button--lg",
        module_style[`button-${color ?? "primary"}-${type ?? "fill"}`]
      )}
      to={path}
    >
      {children}
    </Link>
  );
}
