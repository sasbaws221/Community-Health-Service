import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HealthActivityCreateInput = {
  activity?: string | null;
  activityDate?: Date | null;
  description?: string | null;
  duration?: Decimal | null;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
};
