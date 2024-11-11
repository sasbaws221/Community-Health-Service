import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutResourcesAndAdvicesInput } from "./CommentCreateNestedManyWithoutResourcesAndAdvicesInput";
import { UserCreateNestedManyWithoutResourcesAndAdvicesInput } from "./UserCreateNestedManyWithoutResourcesAndAdvicesInput";

export type ResourcesAndAdviceCreateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comment?: CommentCreateNestedManyWithoutResourcesAndAdvicesInput;
  content?: string | null;
  link?: string | null;
  tag?: string | null;
  title?: string | null;
  user?: UserCreateNestedManyWithoutResourcesAndAdvicesInput;
};
