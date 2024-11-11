import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DailyActivityUpdateInput = {
  date?: Date | null;
  exercise?: string | null;
  meals?: string | null;
  mood?: "Happy" | "Neutral" | "Sad" | "Stressed" | "Energetic" | null;
  note?: string | null;
  sleepHours?: Decimal | null;
  user?: UserWhereUniqueInput | null;
  waterIntake?: Decimal | null;
};
