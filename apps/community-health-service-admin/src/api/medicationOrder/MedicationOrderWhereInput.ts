import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicationListRelationFilter } from "../medication/MedicationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicationOrderWhereInput = {
  deliveredAt?: DateTimeNullableFilter;
  id?: StringFilter;
  medication?: MedicationListRelationFilter;
  orderedAt?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  status?: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  user?: UserWhereUniqueInput;
};
