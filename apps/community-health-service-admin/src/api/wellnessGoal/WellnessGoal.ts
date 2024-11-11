import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type WellnessGoal = {
  createdAt: Date;
  currentProgress: Decimal | null;
  endDate: Date | null;
  frequency?: "Daily" | "Weekly" | "Monthly" | null;
  goal: string | null;
  id: string;
  startDate: Date | null;
  status?: "InProgress" | "Completed" | "Paused" | "Cancelled" | null;
  targetValue: Decimal | null;
  updatedAt: Date;
  user?: User | null;
};
