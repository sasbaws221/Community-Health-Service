import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type LocalEvent = {
  category?:
    | "Workshop"
    | "SupportGroup"
    | "HealthScreening"
    | "Seminar"
    | "ExerciseClass"
    | null;
  comment?: Array<Comment>;
  contact: number | null;
  createdAt: Date;
  description: string | null;
  eventDate: Date | null;
  id: string;
  location: string | null;
  title: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
