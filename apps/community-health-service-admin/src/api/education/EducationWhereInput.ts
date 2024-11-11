import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EducationWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?:
    | "MentalHealth"
    | "Nutrition"
    | "Fitness"
    | "ChronicCondition"
    | "GeneralHealth"
    | "SelfCare";
  difficultyLevel?: "Beginner" | "Intermediate" | "Advanced";
  duration?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserListRelationFilter;
};
