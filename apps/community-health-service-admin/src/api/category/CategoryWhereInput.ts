import { EducationListRelationFilter } from "../education/EducationListRelationFilter";
import { HealthAndWellnessWhereUniqueInput } from "../healthAndWellness/HealthAndWellnessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ResourcesAndAdviceListRelationFilter } from "../resourcesAndAdvice/ResourcesAndAdviceListRelationFilter";

export type CategoryWhereInput = {
  categories?:
    | "MentalHealth"
    | "Fitness"
    | "Nutrition"
    | "GeneralHealth"
    | "ChronicCondition";
  educations?: EducationListRelationFilter;
  healthAndWellnesses?: HealthAndWellnessWhereUniqueInput;
  id?: StringFilter;
  resourcesAndAdvices?: ResourcesAndAdviceListRelationFilter;
};
