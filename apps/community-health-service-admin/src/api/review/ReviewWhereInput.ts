import { StringFilter } from "../../util/StringFilter";
import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  medication?: MedicationWhereUniqueInput;
  productType?: "Doctor" | "Services" | "Medication";
  rating?: "One" | "Two" | "Three" | "Four" | "Five";
  review?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
