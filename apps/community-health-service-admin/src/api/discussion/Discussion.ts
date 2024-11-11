import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Discussion = {
  comment?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  status?: "Open" | "Closed" | null;
  title: string | null;
  topic?: "Health" | "Events" | "ResourcesAndAdvice" | "Tips" | null;
  updatedAt: Date;
  user?: User | null;
};
