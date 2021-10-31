export interface Competition {
  name: string;
  website: string;
  categories: { [k: string]: string };
}

export type CompetitionCode = string
export const CompetitionCodes: { [k: CompetitionCode]: Competition } = {
  nrc: {
    name: "National Robotics Competition",
    website: "https://ducklearning.com/pages/nrc-sg",
    categories: {
      reg: "Regular",
      open: "Open",
      fe: "Future Engineer",
    }
  },
  rcsg: {
    name: "Robocup Singapore Open",
    website: "https://robocupsg.org/en/singaporeopen",
    categories: {
      rescue: "RCJ Rescue Line",
    },
  },
  fll: {
    name: "First LEGO League",
    website: "https://www.firstlegoleague.org/",
    categories: {
      challenge: "Challenge",
    },
  },
  ide: {
    name: "IDE (Innovation, Design and Engineering) Series",
    website: "https://ideseries.org/",
    categories: {
      mission: "IDE Robotics Mission",
      mechwars: "IDE Mech Wars"
    }
  },
  apyrc: {
    name: "Asia Pacific Youth Robotics Competition",
    website: "https://apyrc.com/",
    categories: {
      
    }
  },
  vexsg: {
    name: "Singapore VEX Robotics Competition",
    website: "",
    categories: {
      
    }
  },
  vexap: {
    name: "Asia-Pacific VEX Robotics Championship",
    website: "",
    categories: {
      
    }
  },
  vexworld: {
    name: "VEX Robotics World Championship",
    website: "",
    categories: {
      
    }
  },
  bullseye: {
    name: "Bull’s Eye Competition",
    website: "https://victoria.moe.edu.sg/bulls-eye-competition/",
    categories: {
      
    }
  }
};