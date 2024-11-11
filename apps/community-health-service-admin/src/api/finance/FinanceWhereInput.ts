import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FinancialAssistanceWhereUniqueInput } from "../financialAssistance/FinancialAssistanceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FinanceWhereInput = {
  description?: StringNullableFilter;
  financialAssistances?: FinancialAssistanceWhereUniqueInput;
  id?: StringFilter;
  supportName?: StringNullableFilter;
};
