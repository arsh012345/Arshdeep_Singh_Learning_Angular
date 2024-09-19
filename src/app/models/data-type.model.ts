export interface DataType {
  id: number;
  first_Name: string;
  last_Name?: string; // Optional
  isAdmin?: boolean;
  date_Born: Date;
}
