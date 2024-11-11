
import { registerEnumType } from "@nestjs/graphql";

export enum EnumWellnessGoalStatus {
  InProgress = "InProgress",
  Completed = "Completed",
  Paused = "Paused",
  Cancelled = "Cancelled",
}

registerEnumType(EnumWellnessGoalStatus, {
  name: "EnumWellnessGoalStatus",
});
