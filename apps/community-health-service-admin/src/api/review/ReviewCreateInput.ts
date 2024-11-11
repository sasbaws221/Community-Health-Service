import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  medication?: MedicationWhereUniqueInput | null;
  productType?: "Doctor" | "Services" | "Medication" | null;
  rating?: "One" | "Two" | "Three" | "Four" | "Five" | null;
  review?: string | null;
  user?: UserWhereUniqueInput | null;
};
