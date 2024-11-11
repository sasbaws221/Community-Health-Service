import { MedicationOrder as TMedicationOrder } from "../api/medicationOrder/MedicationOrder";

export const MEDICATIONORDER_TITLE_FIELD = "id";

export const MedicationOrderTitle = (record: TMedicationOrder): string => {
  return record.id?.toString() || String(record.id);
};
