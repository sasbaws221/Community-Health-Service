import { SortOrder } from "../../util/SortOrder";

export type HealthAndWellnessOrderByInput = {
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
