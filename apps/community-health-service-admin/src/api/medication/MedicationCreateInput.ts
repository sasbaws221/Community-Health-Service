import { MedicationOrderCreateNestedManyWithoutMedicationsInput } from "./MedicationOrderCreateNestedManyWithoutMedicationsInput";
import { ReviewCreateNestedManyWithoutMedicationsInput } from "./ReviewCreateNestedManyWithoutMedicationsInput";

export type MedicationCreateInput = {
  category?: string | null;
  description?: string | null;
  medicationOrders?: MedicationOrderCreateNestedManyWithoutMedicationsInput;
  name?: string | null;
  recommendedFor?: string | null;
  reviews?: ReviewCreateNestedManyWithoutMedicationsInput;
  sideEffects?: string | null;
};
