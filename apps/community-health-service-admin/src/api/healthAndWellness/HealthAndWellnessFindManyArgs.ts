import { HealthAndWellnessWhereInput } from "./HealthAndWellnessWhereInput";
import { HealthAndWellnessOrderByInput } from "./HealthAndWellnessOrderByInput";

export type HealthAndWellnessFindManyArgs = {
  where?: HealthAndWellnessWhereInput;
  orderBy?: Array<HealthAndWellnessOrderByInput>;
  skip?: number;
  take?: number;
};
