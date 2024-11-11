import { DiscussionWhereUniqueInput } from "../discussion/DiscussionWhereUniqueInput";
import { HealthAndWellnessWhereUniqueInput } from "../healthAndWellness/HealthAndWellnessWhereUniqueInput";
import { LocalEventWhereUniqueInput } from "../localEvent/LocalEventWhereUniqueInput";
import { ResourcesAndAdviceWhereUniqueInput } from "../resourcesAndAdvice/ResourcesAndAdviceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  comments?: string | null;
  discussions?: DiscussionWhereUniqueInput | null;
  healthAndWellnesses?: HealthAndWellnessWhereUniqueInput | null;
  localEvents?: LocalEventWhereUniqueInput | null;
  resourcesAndAdvices?: ResourcesAndAdviceWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
