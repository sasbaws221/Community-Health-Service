import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WellnessGoalCreateInput = {
  currentProgress?: Decimal | null;
  endDate?: Date | null;
  frequency?: "Daily" | "Weekly" | "Monthly" | null;
  goal?: string | null;
  startDate?: Date | null;
  status?: "InProgress" | "Completed" | "Paused" | "Cancelled" | null;
  targetValue?: Decimal | null;
  user?: UserWhereUniqueInput | null;
};
