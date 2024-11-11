import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserCreateNestedManyWithoutEducationsInput } from "./UserCreateNestedManyWithoutEducationsInput";

export type EducationCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?:
    | "MentalHealth"
    | "Nutrition"
    | "Fitness"
    | "ChronicCondition"
    | "GeneralHealth"
    | "SelfCare"
    | null;
  difficultyLevel?: "Beginner" | "Intermediate" | "Advanced" | null;
  duration?: string | null;
  link?: string | null;
  title?: string | null;
  user?: UserCreateNestedManyWithoutEducationsInput;
};
