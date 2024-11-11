import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type HealthActivity = {
  activity: string | null;
  activityDate: Date | null;
  createdAt: Date;
  description: string | null;
  duration: Decimal | null;
  id: string;
  note: string | null;
  updatedAt: Date;
  user?: User | null;
};
