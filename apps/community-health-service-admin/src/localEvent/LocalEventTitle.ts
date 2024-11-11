import { LocalEvent as TLocalEvent } from "../api/localEvent/LocalEvent";

export const LOCALEVENT_TITLE_FIELD = "title";

export const LocalEventTitle = (record: TLocalEvent): string => {
  return record.title?.toString() || String(record.id);
};
