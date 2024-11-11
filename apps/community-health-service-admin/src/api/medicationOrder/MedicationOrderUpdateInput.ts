import { MedicationUpdateManyWithoutMedicationOrdersInput } from "./MedicationUpdateManyWithoutMedicationOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicationOrderUpdateInput = {
  deliveredAt?: Date | null;
  medication?: MedicationUpdateManyWithoutMedicationOrdersInput;
  orderedAt?: Date | null;
  quantity?: number | null;
  status?: "Pending" | "Shipped" | "Delivered" | "Cancelled" | null;
  user?: UserWhereUniqueInput | null;
};
