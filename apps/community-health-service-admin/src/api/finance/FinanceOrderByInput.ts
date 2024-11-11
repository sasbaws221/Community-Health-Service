import { SortOrder } from "../../util/SortOrder";

export type FinanceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  financialAssistancesId?: SortOrder;
  id?: SortOrder;
  supportName?: SortOrder;
  updatedAt?: SortOrder;
};
