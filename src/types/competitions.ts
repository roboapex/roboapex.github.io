export interface Competition {
  name: string;
  desc: string;
  website: string;
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
    categories: {
      rescue: { name: "RCJ Rescue Line" },
    },
  },
  fll: {
    name: "First LEGO League",
    desc: "hi",
    website: "https://www.firstlegoleague.org/",
    categories: {
      chal: { name: "Challenge" },
    },
  },
};