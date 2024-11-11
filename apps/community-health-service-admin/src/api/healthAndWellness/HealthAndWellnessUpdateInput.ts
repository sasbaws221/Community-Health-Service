import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutHealthAndWellnessesInput } from "./CommentUpdateManyWithoutHealthAndWellnessesInput";
import { UserUpdateManyWithoutHealthAndWellnessesInput } from "./UserUpdateManyWithoutHealthAndWellnessesInput";

export type HealthAndWellnessUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  comment?: CommentUpdateManyWithoutHealthAndWellnessesInput;
  content?: string | null;
  tags?: string | null;
  title?: string | null;
  user?: UserUpdateManyWithoutHealthAndWellnessesInput;
};
