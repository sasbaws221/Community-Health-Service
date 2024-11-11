import { SortOrder } from "../../util/SortOrder";

export type FinancialAssistanceOrderByInput = {
  adminComments?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  supportTypeId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
