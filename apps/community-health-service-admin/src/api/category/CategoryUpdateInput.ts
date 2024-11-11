import { EducationUpdateManyWithoutCategoriesInput } from "./EducationUpdateManyWithoutCategoriesInput";
import { HealthAndWellnessWhereUniqueInput } from "../healthAndWellness/HealthAndWellnessWhereUniqueInput";
import { ResourcesAndAdviceUpdateManyWithoutCategoriesInput } from "./ResourcesAndAdviceUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categories?:
    | "MentalHealth"
    | "Fitness"
    | "Nutrition"
    | "GeneralHealth"
    | "ChronicCondition"
    | null;
  educations?: EducationUpdateManyWithoutCategoriesInput;
  healthAndWellnesses?: HealthAndWellnessWhereUniqueInput | null;
  resourcesAndAdvices?: ResourcesAndAdviceUpdateManyWithoutCategoriesInput;
};
