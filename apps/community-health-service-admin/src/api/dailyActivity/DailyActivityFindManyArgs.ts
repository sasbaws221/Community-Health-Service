import { DailyActivityWhereInput } from "./DailyActivityWhereInput";
import { DailyActivityOrderByInput } from "./DailyActivityOrderByInput";

export type DailyActivityFindManyArgs = {
  where?: DailyActivityWhereInput;
  orderBy?: Array<DailyActivityOrderByInput>;
  skip?: number;
  take?: number;
};
