import { WellnessGoalWhereInput } from "./WellnessGoalWhereInput";
import { WellnessGoalOrderByInput } from "./WellnessGoalOrderByInput";

export type WellnessGoalFindManyArgs = {
  where?: WellnessGoalWhereInput;
  orderBy?: Array<WellnessGoalOrderByInput>;
  skip?: number;
  take?: number;
};
