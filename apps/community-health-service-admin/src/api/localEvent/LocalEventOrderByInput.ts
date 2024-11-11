import { SortOrder } from "../../util/SortOrder";

export type LocalEventOrderByInput = {
  category?: SortOrder;
  contact?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  eventDate?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
