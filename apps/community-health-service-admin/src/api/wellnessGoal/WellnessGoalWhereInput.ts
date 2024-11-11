import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WellnessGoalWhereInput = {
  currentProgress?: DecimalNullableFilter;
  endDate?: DateTimeNullableFilter;
  frequency?: "Daily" | "Weekly" | "Monthly";
  goal?: StringNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  status?: "InProgress" | "Completed" | "Paused" | "Cancelled";
  targetValue?: DecimalNullableFilter;
  user?: UserWhereUniqueInput;
};
