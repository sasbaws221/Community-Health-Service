import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserUpdateManyWithoutEducationsInput } from "./UserUpdateManyWithoutEducationsInput";

export type EducationUpdateInput = {
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
  user?: UserUpdateManyWithoutEducationsInput;
};
