import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  contact?: IntNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
  status?: "Scheduled" | "Completed" | "Cancelled" | "Rescheduled";
};
