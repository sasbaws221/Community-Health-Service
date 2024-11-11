import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "title";

export const CommentTitle = (record: TComment): string => {
  return record.title?.toString() || String(record.id);
};
