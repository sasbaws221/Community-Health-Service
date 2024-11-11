import { EducationWhereInput } from "./EducationWhereInput";
import { EducationOrderByInput } from "./EducationOrderByInput";

export type EducationFindManyArgs = {
  where?: EducationWhereInput;
  orderBy?: Array<EducationOrderByInput>;
  skip?: number;
  take?: number;
};
