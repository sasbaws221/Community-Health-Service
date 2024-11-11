import { HealthAndWellness as THealthAndWellness } from "../api/healthAndWellness/HealthAndWellness";

export const HEALTHANDWELLNESS_TITLE_FIELD = "title";

export const HealthAndWellnessTitle = (record: THealthAndWellness): string => {
  return record.title?.toString() || String(record.id);
};
