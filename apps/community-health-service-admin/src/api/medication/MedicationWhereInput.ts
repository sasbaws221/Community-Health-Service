import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicationOrderListRelationFilter } from "../medicationOrder/MedicationOrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type MedicationWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  medicationOrders?: MedicationOrderListRelationFilter;
  name?: StringNullableFilter;
  recommendedFor?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  sideEffects?: StringNullableFilter;
};
