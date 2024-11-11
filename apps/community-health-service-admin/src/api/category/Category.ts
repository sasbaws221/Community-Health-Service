import { Education } from "../education/Education";
import { HealthAndWellness } from "../healthAndWellness/HealthAndWellness";
import { ResourcesAndAdvice } from "../resourcesAndAdvice/ResourcesAndAdvice";

export type Category = {
  categories?:
    | "MentalHealth"
    | "Fitness"
    | "Nutrition"
    | "GeneralHealth"
    | "ChronicCondition"
    | null;
  createdAt: Date;
  educations?: Array<Education>;
  healthAndWellnesses?: HealthAndWellness | null;
  id: string;
  resourcesAndAdvices?: Array<ResourcesAndAdvice>;
  updatedAt: Date;
};
