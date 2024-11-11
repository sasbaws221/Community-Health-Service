import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  contact?: IntNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
  status?: "New" | "Read" | "Responded";
  subject?: StringNullableFilter;
};
