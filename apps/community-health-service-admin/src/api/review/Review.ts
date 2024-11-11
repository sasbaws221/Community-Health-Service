import { Medication } from "../medication/Medication";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  medication?: Medication | null;
  productType?: "Doctor" | "Services" | "Medication" | null;
  rating?: "One" | "Two" | "Three" | "Four" | "Five" | null;
  review: string | null;
  updatedAt: Date;
  user?: User | null;
};
