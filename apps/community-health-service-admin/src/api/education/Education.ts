import { Category } from "../category/Category";
import { User } from "../user/User";

export type Education = {
  category?: Category | null;
  createdAt: Date;
  description?:
    | "MentalHealth"
    | "Nutrition"
    | "Fitness"
    | "ChronicCondition"
    | "GeneralHealth"
    | "SelfCare"
    | null;
  difficultyLevel?: "Beginner" | "Intermediate" | "Advanced" | null;
  duration: string | null;
  id: string;
  link: string | null;
  title: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
