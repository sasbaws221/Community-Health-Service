import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  discussionsId?: SortOrder;
  healthAndWellnessesId?: SortOrder;
  id?: SortOrder;
  localEventsId?: SortOrder;
  resourcesAndAdvicesId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
