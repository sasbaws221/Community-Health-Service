import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionWhereInput = {
  comment?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  status?: "Open" | "Closed";
  title?: StringNullableFilter;
  topic?: "Health" | "Events" | "ResourcesAndAdvice" | "Tips";
  user?: UserWhereUniqueInput;
};
