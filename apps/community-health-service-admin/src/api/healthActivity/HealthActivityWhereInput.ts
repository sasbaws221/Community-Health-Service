import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HealthActivityWhereInput = {
  activity?: StringNullableFilter;
  activityDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  duration?: DecimalNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
