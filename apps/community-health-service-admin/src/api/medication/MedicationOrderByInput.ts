import { SortOrder } from "../../util/SortOrder";

export type MedicationOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  recommendedFor?: SortOrder;
  sideEffects?: SortOrder;
  updatedAt?: SortOrder;
};
