import { CommentUpdateManyWithoutDiscussionsInput } from "./CommentUpdateManyWithoutDiscussionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionUpdateInput = {
  comment?: CommentUpdateManyWithoutDiscussionsInput;
  content?: string | null;
  status?: "Open" | "Closed" | null;
  title?: string | null;
  topic?: "Health" | "Events" | "ResourcesAndAdvice" | "Tips" | null;
  user?: UserWhereUniqueInput | null;
};
