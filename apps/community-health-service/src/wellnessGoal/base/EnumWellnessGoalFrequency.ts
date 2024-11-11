
import { registerEnumType } from "@nestjs/graphql";

export enum EnumWellnessGoalFrequency {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
}

registerEnumType(EnumWellnessGoalFrequency, {
  name: "EnumWellnessGoalFrequency",
});
