import React, { ReactNode } from "react";
import style from "./style.module.scss";

export default function Notice({children = <>🚧 Work in progress 🚧</>}: {children?: ReactNode}) {
  return (
    <div className={style.box}>
      <p>{children}</p>
    </div>
  );
}
