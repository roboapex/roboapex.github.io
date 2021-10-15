import { ReactNode } from "react";

export interface AboutSection {
  head: string;
  subsections: AboutSubsection[];
}

export interface AboutSubsection {
  subhead: string;
  desc: ReactNode;
}