import { WellnessGoal as TWellnessGoal } from "../api/wellnessGoal/WellnessGoal";

export const WELLNESSGOAL_TITLE_FIELD = "goal";

export const WellnessGoalTitle = (record: TWellnessGoal): string => {
  return record.goal?.toString() || String(record.id);
};
