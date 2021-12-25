export interface Project {
  projectName: string;
  groupName: string;
  event: ProjectEvent;
  year: number;
}

export interface ProjectEvent {
  code: string;
  name: string;
  website: string;
}