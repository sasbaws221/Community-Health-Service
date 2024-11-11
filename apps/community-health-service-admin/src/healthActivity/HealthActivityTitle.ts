import { HealthActivity as THealthActivity } from "../api/healthActivity/HealthActivity";

export const HEALTHACTIVITY_TITLE_FIELD = "activity";

export const HealthActivityTitle = (record: THealthActivity): string => {
  return record.activity?.toString() || String(record.id);
};
