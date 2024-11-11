import { Decimal } from "decimal.js";
import { FinanceWhereUniqueInput } from "../finance/FinanceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialAssistanceUpdateInput = {
  adminComments?: string | null;
  amount?: Decimal | null;
  description?: string | null;
  status?: "Pending" | "Approval" | "Rejected" | null;
  supportType?: FinanceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
