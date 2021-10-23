export interface Project {
  projectName: string;
  groupName: string;
  event: ProjectEvent;
  year: number;
  category: ProjectCategory;
}

export interface ProjectEvent {
  code: string;
  name: string;
  website: string;
}

export interface ProjectCategory {
  code: string;
  name: string;
}