import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type DailyActivity = {
  createdAt: Date;
  date: Date | null;
  exercise: string | null;
  id: string;
  meals: string | null;
  mood?: "Happy" | "Neutral" | "Sad" | "Stressed" | "Energetic" | null;
  note: string | null;
  sleepHours: Decimal | null;
  user?: User | null;
  waterIntake: Decimal | null;
};
