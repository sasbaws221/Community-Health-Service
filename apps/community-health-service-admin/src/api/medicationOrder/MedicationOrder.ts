import { Medication } from "../medication/Medication";
import { User } from "../user/User";

export type MedicationOrder = {
  createdAt: Date;
  deliveredAt: Date | null;
  id: string;
  medication?: Array<Medication>;
  orderedAt: Date | null;
  quantity: number | null;
  status?: "Pending" | "Shipped" | "Delivered" | "Cancelled" | null;
  updatedAt: Date;
  user?: User | null;
};
