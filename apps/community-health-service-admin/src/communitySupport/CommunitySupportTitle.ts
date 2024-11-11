import { CommunitySupport as TCommunitySupport } from "../api/communitySupport/CommunitySupport";

export const COMMUNITYSUPPORT_TITLE_FIELD = "id";

export const CommunitySupportTitle = (record: TCommunitySupport): string => {
  return record.id?.toString() || String(record.id);
};
