import { MedicationOrder } from "../medicationOrder/MedicationOrder";
import { Review } from "../review/Review";

export type Medication = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  medicationOrders?: Array<MedicationOrder>;
  name: string | null;
  recommendedFor: string | null;
  reviews?: Array<Review>;
  sideEffects: string | null;
  updatedAt: Date;
};
