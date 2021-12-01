export interface CompetitionEvent {
  categories: { [k: string]: string };
  regions: { [k: string]: CompetitionRegion }
}

export interface CompetitionRegion {
  name: string;
  website?: string;
}

export type CompetitionRegionCode = string
export type CompetitionEventCode = "nrc" | "robocup" | "fll" | "ide" | "apyrc" | "vex" | "bullseye" | "roborave" | "makex"
export const CompetitionCodes: { [k in CompetitionEventCode]: CompetitionEvent } = {
  nrc: {
    categories: {
      reg: "Regular",
      open: "Open",
      fe: "Future Engineer",
    },
    regions: {
      sg: {
        name: "National Robotics Competition (Singapore)",
        website: "https://ducklearning.com/pages/nrc-sg"
      }
    }
  },
  robocup: {
    categories: {
      rescue: "RCJ Rescue Line",
    },
    regions: {
      sg: {
        name: "Robocup Singapore Open",
        website: "https://robocupsg.org/en/singaporeopen",
      },
      aptji: {
        name: "RoboCup Asia-Pacific Tianjin"
      },
      icool: {
        name: "International CoSpace OnLine (iCooL) Challenge @Virtual RoboCup",
        website: "https://robocupap.org/icool2020/"
      }
    }
  },
  fll: {
    categories: {
      challenge: "Challenge",
    },
    regions: {
      sg: {
        name: "First LEGO League",
        website: "https://www.firstlegoleague.org/",
      }
    }
  },
  ide: {
    categories: {
      robotics: "IDE Robotics",
      mechwars: "IDE Mech Wars",
      sprint: "IDE Sprint"
    },
    regions: {
      sg: {
        name: "IDE (Innovation, Design and Engineering) Series",
        website: "https://ideseries.org/",
      }
    }
  },
  apyrc: {
    categories: {
      
    },
    regions: {
      sg: {
        name: "Asia Pacific Youth Robotics Competition",
        website: "https://apyrc.com/"
      },
    }
  },
  vex: {
    categories: {
      
    },
    regions: {
      sg: {
        name: "Singapore VEX Robotics Competition"
      },
      ap: {
        name: "Asia-Pacific VEX Robotics Championship"
      },
      world: {
        name: "VEX Robotics World Championship"
      }
    }
  },
  bullseye: {
    categories: {
      
    },
    regions: {
      sg: {
        name: "Bull’s Eye Competition",
        website: "https://victoria.moe.edu.sg/bulls-eye-competition/"
      }
    }
  },
  roborave: {
    categories: {

    },
    regions: {
      kaga: {
        name: "RoboRave Kaga Japan",
        website: "https://www.roborave-kaga.com/"
      },
      int: {
        name: "RoboRave International",
        website: "http://roborave.itccc.org.cn/"
      }
    }
  },
  makex: {
    categories: {

    },
    regions: {
      sg: {
        name: "MakeX Robotics Competition Singapore",
        website: "https://www.makexsg.com/"
      },
      world: {
        name: "",
        website: "https://www.makex.cc/en"
      }
    }
  }
};