import React, { ReactNode } from "react";
import Layout from "@theme/Layout";
import style from "./style.module.scss";

export default function ThemeLayout({
  children,
  title,
  noPadding = false,
}: {
  children?: ReactNode;
  title: string;
  noPadding?: boolean;
}) {
  return (
    <Layout title={title}>
      <main
        className={style.main}
        style={noPadding ? { padding: 0 } : undefined}
      >
        {children}
      </main>
    </Layout>
  );
}
