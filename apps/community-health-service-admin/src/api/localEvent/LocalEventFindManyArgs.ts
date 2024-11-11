import { LocalEventWhereInput } from "./LocalEventWhereInput";
import { LocalEventOrderByInput } from "./LocalEventOrderByInput";

export type LocalEventFindManyArgs = {
  where?: LocalEventWhereInput;
  orderBy?: Array<LocalEventOrderByInput>;
  skip?: number;
  take?: number;
};
