import { DailyActivity as TDailyActivity } from "../api/dailyActivity/DailyActivity";

export const DAILYACTIVITY_TITLE_FIELD = "exercise";

export const DailyActivityTitle = (record: TDailyActivity): string => {
  return record.exercise?.toString() || String(record.id);
};
