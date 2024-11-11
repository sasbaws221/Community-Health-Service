import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  medicationId?: SortOrder;
  productType?: SortOrder;
  rating?: SortOrder;
  review?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
