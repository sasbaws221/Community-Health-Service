import { FinancialAssistanceWhereUniqueInput } from "../financialAssistance/FinancialAssistanceWhereUniqueInput";

export type FinanceUpdateInput = {
  description?: string | null;
  financialAssistances?: FinancialAssistanceWhereUniqueInput | null;
  supportName?: string | null;
};
