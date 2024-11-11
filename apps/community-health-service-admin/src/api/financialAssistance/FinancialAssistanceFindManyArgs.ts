import { FinancialAssistanceWhereInput } from "./FinancialAssistanceWhereInput";
import { FinancialAssistanceOrderByInput } from "./FinancialAssistanceOrderByInput";

export type FinancialAssistanceFindManyArgs = {
  where?: FinancialAssistanceWhereInput;
  orderBy?: Array<FinancialAssistanceOrderByInput>;
  skip?: number;
  take?: number;
};
