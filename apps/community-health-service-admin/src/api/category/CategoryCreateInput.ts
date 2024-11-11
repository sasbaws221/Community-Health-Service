import { EducationCreateNestedManyWithoutCategoriesInput } from "./EducationCreateNestedManyWithoutCategoriesInput";
import { HealthAndWellnessWhereUniqueInput } from "../healthAndWellness/HealthAndWellnessWhereUniqueInput";
import { ResourcesAndAdviceCreateNestedManyWithoutCategoriesInput } from "./ResourcesAndAdviceCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categories?:
    | "MentalHealth"
    | "Fitness"
    | "Nutrition"
    | "GeneralHealth"
    | "ChronicCondition"
    | null;
  educations?: EducationCreateNestedManyWithoutCategoriesInput;
  healthAndWellnesses?: HealthAndWellnessWhereUniqueInput | null;
  resourcesAndAdvices?: ResourcesAndAdviceCreateNestedManyWithoutCategoriesInput;
};
