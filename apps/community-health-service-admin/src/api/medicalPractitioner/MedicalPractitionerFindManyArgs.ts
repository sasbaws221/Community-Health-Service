import { MedicalPractitionerWhereInput } from "./MedicalPractitionerWhereInput";
import { MedicalPractitionerOrderByInput } from "./MedicalPractitionerOrderByInput";

export type MedicalPractitionerFindManyArgs = {
  where?: MedicalPractitionerWhereInput;
  orderBy?: Array<MedicalPractitionerOrderByInput>;
  skip?: number;
  take?: number;
};
