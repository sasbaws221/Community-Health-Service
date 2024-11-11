import { Education as TEducation } from "../api/education/Education";

export const EDUCATION_TITLE_FIELD = "title";

export const EducationTitle = (record: TEducation): string => {
  return record.title?.toString() || String(record.id);
};
