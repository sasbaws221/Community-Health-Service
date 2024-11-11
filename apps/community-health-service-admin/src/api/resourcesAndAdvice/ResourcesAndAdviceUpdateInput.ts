import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutResourcesAndAdvicesInput } from "./CommentUpdateManyWithoutResourcesAndAdvicesInput";
import { UserUpdateManyWithoutResourcesAndAdvicesInput } from "./UserUpdateManyWithoutResourcesAndAdvicesInput";

export type ResourcesAndAdviceUpdateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comment?: CommentUpdateManyWithoutResourcesAndAdvicesInput;
  content?: string | null;
  link?: string | null;
  tag?: string | null;
  title?: string | null;
  user?: UserUpdateManyWithoutResourcesAndAdvicesInput;
};
