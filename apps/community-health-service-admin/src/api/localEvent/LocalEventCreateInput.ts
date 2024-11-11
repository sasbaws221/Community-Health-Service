import { CommentCreateNestedManyWithoutLocalEventsInput } from "./CommentCreateNestedManyWithoutLocalEventsInput";
import { UserCreateNestedManyWithoutLocalEventsInput } from "./UserCreateNestedManyWithoutLocalEventsInput";

export type LocalEventCreateInput = {
  category?:
    | "Workshop"
    | "SupportGroup"
    | "HealthScreening"
    | "Seminar"
    | "ExerciseClass"
    | null;
  comment?: CommentCreateNestedManyWithoutLocalEventsInput;
  contact?: number | null;
  description?: string | null;
  eventDate?: Date | null;
  location?: string | null;
  title?: string | null;
  user?: UserCreateNestedManyWithoutLocalEventsInput;
};
