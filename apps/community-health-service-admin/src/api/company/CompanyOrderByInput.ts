import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  offers?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
