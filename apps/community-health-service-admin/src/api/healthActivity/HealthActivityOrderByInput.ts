import { SortOrder } from "../../util/SortOrder";

export type HealthActivityOrderByInput = {
  activity?: SortOrder;
  activityDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
