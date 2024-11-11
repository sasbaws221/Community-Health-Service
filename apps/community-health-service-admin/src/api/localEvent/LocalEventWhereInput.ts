import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type LocalEventWhereInput = {
  category?:
    | "Workshop"
    | "SupportGroup"
    | "HealthScreening"
    | "Seminar"
    | "ExerciseClass";
  comment?: CommentListRelationFilter;
  contact?: IntNullableFilter;
  description?: StringNullableFilter;
  eventDate?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserListRelationFilter;
};
