import { ResourcesAndAdvice as TResourcesAndAdvice } from "../api/resourcesAndAdvice/ResourcesAndAdvice";

export const RESOURCESANDADVICE_TITLE_FIELD = "title";

export const ResourcesAndAdviceTitle = (
  record: TResourcesAndAdvice
): string => {
  return record.title?.toString() || String(record.id);
};
