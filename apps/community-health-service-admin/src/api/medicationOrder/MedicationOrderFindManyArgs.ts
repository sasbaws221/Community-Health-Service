import { MedicationOrderWhereInput } from "./MedicationOrderWhereInput";
import { MedicationOrderOrderByInput } from "./MedicationOrderOrderByInput";

export type MedicationOrderFindManyArgs = {
  where?: MedicationOrderWhereInput;
  orderBy?: Array<MedicationOrderOrderByInput>;
  skip?: number;
  take?: number;
};
