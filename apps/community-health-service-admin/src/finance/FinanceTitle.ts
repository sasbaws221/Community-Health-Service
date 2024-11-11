import { Finance as TFinance } from "../api/finance/Finance";

export const FINANCE_TITLE_FIELD = "supportName";

export const FinanceTitle = (record: TFinance): string => {
  return record.supportName?.toString() || String(record.id);
};
