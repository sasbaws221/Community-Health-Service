import { Discussion as TDiscussion } from "../api/discussion/Discussion";

export const DISCUSSION_TITLE_FIELD = "title";

export const DiscussionTitle = (record: TDiscussion): string => {
  return record.title?.toString() || String(record.id);
};
