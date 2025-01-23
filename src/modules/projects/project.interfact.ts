export interface IProject {
  title: string;
  description: string;
  email: string;
  image: string;
  status: 'pending' | 'in-progress' | 'completed';
  tag: string;
  startDate: string;
  endDate: string;
}
