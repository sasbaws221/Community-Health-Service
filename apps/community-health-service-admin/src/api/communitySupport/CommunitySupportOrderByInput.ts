import { SortOrder } from "../../util/SortOrder";

export type CommunitySupportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isAdmin?: SortOrder;
  messageContent?: SortOrder;
  senderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
