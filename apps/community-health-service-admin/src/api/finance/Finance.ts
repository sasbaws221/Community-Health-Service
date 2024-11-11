import { FinancialAssistance } from "../financialAssistance/FinancialAssistance";

export type Finance = {
  createdAt: Date;
  description: string | null;
  financialAssistances?: FinancialAssistance | null;
  id: string;
  supportName: string | null;
  updatedAt: Date;
};
