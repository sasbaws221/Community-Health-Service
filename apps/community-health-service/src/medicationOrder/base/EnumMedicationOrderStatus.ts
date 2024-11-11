
import { registerEnumType } from "@nestjs/graphql";

export enum EnumMedicationOrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

registerEnumType(EnumMedicationOrderStatus, {
  name: "EnumMedicationOrderStatus",
});
