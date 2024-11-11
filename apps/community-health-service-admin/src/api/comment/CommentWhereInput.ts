import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscussionWhereUniqueInput } from "../discussion/DiscussionWhereUniqueInput";
import { HealthAndWellnessWhereUniqueInput } from "../healthAndWellness/HealthAndWellnessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocalEventWhereUniqueInput } from "../localEvent/LocalEventWhereUniqueInput";
import { ResourcesAndAdviceWhereUniqueInput } from "../resourcesAndAdvice/ResourcesAndAdviceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  comments?: StringNullableFilter;
  discussions?: DiscussionWhereUniqueInput;
  healthAndWellnesses?: HealthAndWellnessWhereUniqueInput;
  id?: StringFilter;
  localEvents?: LocalEventWhereUniqueInput;
  resourcesAndAdvices?: ResourcesAndAdviceWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
