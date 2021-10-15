import React, { ReactNode } from "react";
import Layout from "@theme/Layout";
import style from "./style.module.css";

export default function ThemeLayout({
  children,
  title
}: {
  children: ReactNode;
  title: string
}) {
  return (
    <Layout title={title}>
      <main className={style.main}>{children}</main>
    </Layout>
  );
}
