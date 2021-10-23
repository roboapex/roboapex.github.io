export interface AboutSection {
  head: string;
  subsections: AboutSubsection[];
}

export interface AboutSubsection {
  subhead: string;
  desc: React.ReactNode;
}