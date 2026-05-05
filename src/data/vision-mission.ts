import { fetchFirstWorkingPaginatedResource } from "./publication-api";

export interface ApiVisionMissionItem {
  id: string;
  title: string;
  vision: string;
  mission: string;
  image_url?: string | null;
  created_at: string;
  updated_at: string;
}

export const sortVisionMissionItems = (items: ApiVisionMissionItem[]) =>
  [...items].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  );

export const getDynamicVisionMission = async () =>
  sortVisionMissionItems(
    await fetchFirstWorkingPaginatedResource<ApiVisionMissionItem>(
      "/vision-missions?page=1&limit=100",
      (item): item is ApiVisionMissionItem =>
        Boolean(
          item &&
            typeof item === "object" &&
            "title" in item &&
            "vision" in item &&
            "mission" in item,
        ),
    ),
  );
