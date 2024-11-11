
import { registerEnumType } from "@nestjs/graphql";

export enum EnumLocalEventCategory {
  Workshop = "Workshop",
  SupportGroup = "SupportGroup",
  HealthScreening = "HealthScreening",
  Seminar = "Seminar",
  ExerciseClass = "ExerciseClass",
}

registerEnumType(EnumLocalEventCategory, {
  name: "EnumLocalEventCategory",
});
