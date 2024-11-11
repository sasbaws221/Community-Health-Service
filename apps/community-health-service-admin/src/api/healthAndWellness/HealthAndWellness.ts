import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type HealthAndWellness = {
  category?: Category | null;
  comment?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  tags: string | null;
  title: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
