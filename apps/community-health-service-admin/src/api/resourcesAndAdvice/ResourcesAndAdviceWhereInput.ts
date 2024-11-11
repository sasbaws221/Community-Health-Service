import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ResourcesAndAdviceWhereInput = {
  author?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  comment?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  tag?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserListRelationFilter;
};
