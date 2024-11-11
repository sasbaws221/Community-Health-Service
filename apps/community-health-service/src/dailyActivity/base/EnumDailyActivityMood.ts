
import { registerEnumType } from "@nestjs/graphql";

export enum EnumDailyActivityMood {
  Happy = "Happy",
  Neutral = "Neutral",
  Sad = "Sad",
  Stressed = "Stressed",
  Energetic = "Energetic",
}

registerEnumType(EnumDailyActivityMood, {
  name: "EnumDailyActivityMood",
});
