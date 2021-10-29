import { CompetitionCode } from "./competitions";

export interface Achievements {
  year: number;
  competitions: AchievementsCompetition[];
}

export interface AchievementsCompetition {
  code: CompetitionCode;
  desc: string;
  awards: AchievementsAward[];
  media?: AchievementsMedia[];
}

export interface AchievementsAward {
  title: string;
  category: string;
  team: string;
  project: string; // TODO
  recipients: string[];
  media?: AchievementsMedia[];
}

export interface AchievementsMedia {
  caption: string;
  url: string;
}

export interface AchievementsFilterProperties {
  year: string
  comp: string
}