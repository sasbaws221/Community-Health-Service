import { MedicationOrderUpdateManyWithoutMedicationsInput } from "./MedicationOrderUpdateManyWithoutMedicationsInput";
import { ReviewUpdateManyWithoutMedicationsInput } from "./ReviewUpdateManyWithoutMedicationsInput";

export type MedicationUpdateInput = {
  category?: string | null;
  description?: string | null;
  medicationOrders?: MedicationOrderUpdateManyWithoutMedicationsInput;
  name?: string | null;
  recommendedFor?: string | null;
  reviews?: ReviewUpdateManyWithoutMedicationsInput;
  sideEffects?: string | null;
};
