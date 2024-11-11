
import { registerEnumType } from "@nestjs/graphql";

export enum EnumEducationDescription {
  MentalHealth = "MentalHealth",
  Nutrition = "Nutrition",
  Fitness = "Fitness",
  ChronicCondition = "ChronicCondition",
  GeneralHealth = "GeneralHealth",
  SelfCare = "SelfCare",
}

registerEnumType(EnumEducationDescription, {
  name: "EnumEducationDescription",
});
