import { ResourcesAndAdviceWhereInput } from "./ResourcesAndAdviceWhereInput";
import { ResourcesAndAdviceOrderByInput } from "./ResourcesAndAdviceOrderByInput";

export type ResourcesAndAdviceFindManyArgs = {
  where?: ResourcesAndAdviceWhereInput;
  orderBy?: Array<ResourcesAndAdviceOrderByInput>;
  skip?: number;
  take?: number;
};
