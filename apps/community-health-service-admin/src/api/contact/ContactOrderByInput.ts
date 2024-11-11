import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  contact?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
