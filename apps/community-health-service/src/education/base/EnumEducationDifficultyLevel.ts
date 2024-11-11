
import { registerEnumType } from "@nestjs/graphql";

export enum EnumEducationDifficultyLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

registerEnumType(EnumEducationDifficultyLevel, {
  name: "EnumEducationDifficultyLevel",
});
