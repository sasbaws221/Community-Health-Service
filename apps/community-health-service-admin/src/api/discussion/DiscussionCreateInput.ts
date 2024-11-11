import { CommentCreateNestedManyWithoutDiscussionsInput } from "./CommentCreateNestedManyWithoutDiscussionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionCreateInput = {
  comment?: CommentCreateNestedManyWithoutDiscussionsInput;
  content?: string | null;
  status?: "Open" | "Closed" | null;
  title?: string | null;
  topic?: "Health" | "Events" | "ResourcesAndAdvice" | "Tips" | null;
  user?: UserWhereUniqueInput | null;
};
