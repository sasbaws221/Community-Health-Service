import { User } from "../user/User";

export type MedicalPractitioner = {
  bio: string | null;
  contact: string | null;
  createdAt: Date;
  id: string;
  licenseNumber: string | null;
  specialization: string | null;
  updatedAt: Date;
  user?: User | null;
  yearsOfExperience: string | null;
};
