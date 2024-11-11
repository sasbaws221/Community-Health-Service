import { FinancialAssistance as TFinancialAssistance } from "../api/financialAssistance/FinancialAssistance";

export const FINANCIALASSISTANCE_TITLE_FIELD = "id";

export const FinancialAssistanceTitle = (
  record: TFinancialAssistance
): string => {
  return record.id?.toString() || String(record.id);
};
