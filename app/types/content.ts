export interface ProjectItem {
  path: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  headline?: string;
  date?: string;
  hidden?: boolean;
}
