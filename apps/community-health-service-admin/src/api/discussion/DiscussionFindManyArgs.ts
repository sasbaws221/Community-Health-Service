import { DiscussionWhereInput } from "./DiscussionWhereInput";
import { DiscussionOrderByInput } from "./DiscussionOrderByInput";

export type DiscussionFindManyArgs = {
  where?: DiscussionWhereInput;
  orderBy?: Array<DiscussionOrderByInput>;
  skip?: number;
  take?: number;
};
