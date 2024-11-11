import { CommentUpdateManyWithoutLocalEventsInput } from "./CommentUpdateManyWithoutLocalEventsInput";
import { UserUpdateManyWithoutLocalEventsInput } from "./UserUpdateManyWithoutLocalEventsInput";

export type LocalEventUpdateInput = {
  category?:
    | "Workshop"
    | "SupportGroup"
    | "HealthScreening"
    | "Seminar"
    | "ExerciseClass"
    | null;
  comment?: CommentUpdateManyWithoutLocalEventsInput;
  contact?: number | null;
  description?: string | null;
  eventDate?: Date | null;
  location?: string | null;
  title?: string | null;
  user?: UserUpdateManyWithoutLocalEventsInput;
};
