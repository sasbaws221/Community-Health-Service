import { HealthActivityWhereInput } from "./HealthActivityWhereInput";
import { HealthActivityOrderByInput } from "./HealthActivityOrderByInput";

export type HealthActivityFindManyArgs = {
  where?: HealthActivityWhereInput;
  orderBy?: Array<HealthActivityOrderByInput>;
  skip?: number;
  take?: number;
};
