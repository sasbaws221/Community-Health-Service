import { SortOrder } from "../../util/SortOrder";

export type DiscussionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
