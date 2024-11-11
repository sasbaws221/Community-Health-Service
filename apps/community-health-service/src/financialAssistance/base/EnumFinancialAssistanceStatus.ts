
import { registerEnumType } from "@nestjs/graphql";

export enum EnumFinancialAssistanceStatus {
  Pending = "Pending",
  Approval = "Approval",
  Rejected = "Rejected",
}

registerEnumType(EnumFinancialAssistanceStatus, {
  name: "EnumFinancialAssistanceStatus",
});
