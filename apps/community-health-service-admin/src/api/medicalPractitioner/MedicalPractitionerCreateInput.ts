import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalPractitionerCreateInput = {
  bio?: string | null;
  contact?: string | null;
  licenseNumber?: string | null;
  specialization?: string | null;
  user?: UserWhereUniqueInput | null;
  yearsOfExperience?: string | null;
};
