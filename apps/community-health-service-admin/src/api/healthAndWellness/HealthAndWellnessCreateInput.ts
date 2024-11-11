import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutHealthAndWellnessesInput } from "./CommentCreateNestedManyWithoutHealthAndWellnessesInput";
import { UserCreateNestedManyWithoutHealthAndWellnessesInput } from "./UserCreateNestedManyWithoutHealthAndWellnessesInput";

export type HealthAndWellnessCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  comment?: CommentCreateNestedManyWithoutHealthAndWellnessesInput;
  content?: string | null;
  tags?: string | null;
  title?: string | null;
  user?: UserCreateNestedManyWithoutHealthAndWellnessesInput;
};
