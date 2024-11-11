import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { CommunitySupportCreateNestedManyWithoutUsersInput } from "./CommunitySupportCreateNestedManyWithoutUsersInput";
import { DailyActivityCreateNestedManyWithoutUsersInput } from "./DailyActivityCreateNestedManyWithoutUsersInput";
import { DiscussionCreateNestedManyWithoutUsersInput } from "./DiscussionCreateNestedManyWithoutUsersInput";
import { EducationCreateNestedManyWithoutUsersInput } from "./EducationCreateNestedManyWithoutUsersInput";
import { FinancialAssistanceCreateNestedManyWithoutUsersInput } from "./FinancialAssistanceCreateNestedManyWithoutUsersInput";
import { HealthActivityCreateNestedManyWithoutUsersInput } from "./HealthActivityCreateNestedManyWithoutUsersInput";
import { HealthAndWellnessCreateNestedManyWithoutUsersInput } from "./HealthAndWellnessCreateNestedManyWithoutUsersInput";
import { LocalEventCreateNestedManyWithoutUsersInput } from "./LocalEventCreateNestedManyWithoutUsersInput";
import { MedicalPractitionerCreateNestedManyWithoutUsersInput } from "./MedicalPractitionerCreateNestedManyWithoutUsersInput";
import { MedicationOrderCreateNestedManyWithoutUsersInput } from "./MedicationOrderCreateNestedManyWithoutUsersInput";
import { ResourcesAndAdviceCreateNestedManyWithoutUsersInput } from "./ResourcesAndAdviceCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WellnessGoalCreateNestedManyWithoutUsersInput } from "./WellnessGoalCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  communitySupports?: CommunitySupportCreateNestedManyWithoutUsersInput;
  dailyActivities?: DailyActivityCreateNestedManyWithoutUsersInput;
  discussions?: DiscussionCreateNestedManyWithoutUsersInput;
  educations?: EducationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  financialAssistances?: FinancialAssistanceCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  healthActivities?: HealthActivityCreateNestedManyWithoutUsersInput;
  healthAndWellnesses?: HealthAndWellnessCreateNestedManyWithoutUsersInput;
  isActive?: boolean | null;
  lastName?: string | null;
  localEvents?: LocalEventCreateNestedManyWithoutUsersInput;
  medicalPractitioners?: MedicalPractitionerCreateNestedManyWithoutUsersInput;
  medicationOrders?: MedicationOrderCreateNestedManyWithoutUsersInput;
  password: string;
  resourcesAndAdvices?: ResourcesAndAdviceCreateNestedManyWithoutUsersInput;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  wellnessGoals?: WellnessGoalCreateNestedManyWithoutUsersInput;
};
