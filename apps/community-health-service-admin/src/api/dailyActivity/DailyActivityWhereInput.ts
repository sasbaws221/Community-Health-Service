import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DailyActivityWhereInput = {
  date?: DateTimeNullableFilter;
  exercise?: StringNullableFilter;
  id?: StringFilter;
  meals?: StringNullableFilter;
  mood?: "Happy" | "Neutral" | "Sad" | "Stressed" | "Energetic";
  note?: StringNullableFilter;
  sleepHours?: DecimalNullableFilter;
  user?: UserWhereUniqueInput;
  waterIntake?: DecimalNullableFilter;
};
