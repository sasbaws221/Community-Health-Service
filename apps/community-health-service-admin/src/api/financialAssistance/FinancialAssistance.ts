import { Decimal } from "decimal.js";
import { Finance } from "../finance/Finance";
import { User } from "../user/User";

export type FinancialAssistance = {
  adminComments: string | null;
  amount: Decimal | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Pending" | "Approval" | "Rejected" | null;
  supportType?: Finance | null;
  updatedAt: Date;
  user?: User | null;
};
