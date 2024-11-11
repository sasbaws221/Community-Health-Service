import { MedicalPractitioner as TMedicalPractitioner } from "../api/medicalPractitioner/MedicalPractitioner";

export const MEDICALPRACTITIONER_TITLE_FIELD = "bio";

export const MedicalPractitionerTitle = (
  record: TMedicalPractitioner
): string => {
  return record.bio?.toString() || String(record.id);
};
