import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FinanceWhereUniqueInput } from "../finance/FinanceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialAssistanceWhereInput = {
  adminComments?: StringNullableFilter;
  amount?: DecimalNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Pending" | "Approval" | "Rejected";
  supportType?: FinanceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
