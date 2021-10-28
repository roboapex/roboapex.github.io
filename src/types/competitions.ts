export interface Competition {
  name: string;
  desc: string;
  website: string;
  logoURL?: string;
  categories: { [k: string]: CompetitionCategory };
}

export interface CompetitionCategory {
  name: string;
}

export type CompetitionCode = string
export const CompetitionCodes: { [k: CompetitionCode]: Competition } = {
  nrc: {
    name: "National Robotics Competition",
    desc: "hi",
    website: "https://ducklearning.com/pages/nrc-sg",
    logoURL: "",
    categories: {
      reg: { name: "Regular" },
      open: { name: "Open" },
      fe: { name: "Future Engineer" },
    }
  },
  rcsg: {
    name: "Robocup Singapore",
    desc: "hi",
    website: "https://robocupsg.org/en/singaporeopen",
    logoURL: "rcsg2021.png",
    categories: {
      rescue: { name: "RCJ Rescue Line" },
    },
  },
  fll: {
    name: "First LEGO League",
    desc: "hi",
    website: "https://www.firstlegoleague.org/",
    logoURL: "",
    categories: {
      chal: { name: "Challenge" },
    },
  },
};