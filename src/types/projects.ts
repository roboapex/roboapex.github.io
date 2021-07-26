interface Project {
  projectName: string;
  groupName: string;
  event: ProjectEvent;
  year: number;
  category: ProjectCategory;
}

interface ProjectEvent {
  code: string;
  name: string;
  website: string;
}

interface ProjectCategory {
  code: string;
  name: string;
}

export type ProjectEventLookup = { [k: string]: ProjectEventLookupEntry };

interface ProjectEventLookupEntry {
  name: string;
  website: string;
  categories: ProjectCategoryLookup;
}

export type ProjectCategoryLookup = { [k: string]: ProjectCategoryLookupEntry };

interface ProjectCategoryLookupEntry {
  name: string;
}

export {
  Project,
  ProjectEvent,
  ProjectCategory,
  ProjectEventLookupEntry,
  ProjectCategoryLookupEntry,
};
