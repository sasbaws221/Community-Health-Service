import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HealthAndWellnessWhereInput = {
  category?: CategoryWhereUniqueInput;
  comment?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserListRelationFilter;
};
