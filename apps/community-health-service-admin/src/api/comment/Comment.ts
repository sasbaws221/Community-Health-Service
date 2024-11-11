import { Discussion } from "../discussion/Discussion";
import { HealthAndWellness } from "../healthAndWellness/HealthAndWellness";
import { LocalEvent } from "../localEvent/LocalEvent";
import { ResourcesAndAdvice } from "../resourcesAndAdvice/ResourcesAndAdvice";
import { User } from "../user/User";

export type Comment = {
  comments: string | null;
  createdAt: Date;
  discussions?: Discussion | null;
  healthAndWellnesses?: HealthAndWellness | null;
  id: string;
  localEvents?: LocalEvent | null;
  resourcesAndAdvices?: ResourcesAndAdvice | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
