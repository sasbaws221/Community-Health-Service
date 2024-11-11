import { SortOrder } from "../../util/SortOrder";

export type ResourcesAndAdviceOrderByInput = {
  author?: SortOrder;
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  tag?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
