import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalPractitionerWhereInput = {
  bio?: StringNullableFilter;
  contact?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  specialization?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  yearsOfExperience?: StringNullableFilter;
};
