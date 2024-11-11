import { SortOrder } from "../../util/SortOrder";

export type MedicationOrderOrderByInput = {
  createdAt?: SortOrder;
  deliveredAt?: SortOrder;
  id?: SortOrder;
  orderedAt?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
