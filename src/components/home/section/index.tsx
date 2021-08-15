import React, { ReactNode } from 'react';
import style from "./style.module.css";

export default function HomeSection({children, title}: {children: ReactNode, title?: string}) {
  return (
    <section className={style.section}>
      {title === undefined ? undefined : <h1>{title}</h1>}
      {children}
    </section>
  )
}