import { MedicationCreateNestedManyWithoutMedicationOrdersInput } from "./MedicationCreateNestedManyWithoutMedicationOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicationOrderCreateInput = {
  deliveredAt?: Date | null;
  medication?: MedicationCreateNestedManyWithoutMedicationOrdersInput;
  orderedAt?: Date | null;
  quantity?: number | null;
  status?: "Pending" | "Shipped" | "Delivered" | "Cancelled" | null;
  user?: UserWhereUniqueInput | null;
};
