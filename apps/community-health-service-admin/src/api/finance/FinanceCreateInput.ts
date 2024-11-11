import { FinancialAssistanceWhereUniqueInput } from "../financialAssistance/FinancialAssistanceWhereUniqueInput";

export type FinanceCreateInput = {
  description?: string | null;
  financialAssistances?: FinancialAssistanceWhereUniqueInput | null;
  supportName?: string | null;
};
