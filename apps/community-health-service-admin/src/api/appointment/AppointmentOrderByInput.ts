import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  contact?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
