import { SortOrder } from "../../util/SortOrder";

export type WellnessGoalOrderByInput = {
  createdAt?: SortOrder;
  currentProgress?: SortOrder;
  endDate?: SortOrder;
  frequency?: SortOrder;
  goal?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  targetValue?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
