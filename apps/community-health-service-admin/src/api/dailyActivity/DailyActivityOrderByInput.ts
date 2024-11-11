import { SortOrder } from "../../util/SortOrder";

export type DailyActivityOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  exercise?: SortOrder;
  id?: SortOrder;
  meals?: SortOrder;
  mood?: SortOrder;
  note?: SortOrder;
  sleepHours?: SortOrder;
  userId?: SortOrder;
  waterIntake?: SortOrder;
};
