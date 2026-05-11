import { fetchFirstWorkingPaginatedResource } from "./publication-api";

export interface ApiOrganizationalStructureItem {
  id: string;
  title: string;
  description: string;
  image_url?: string | null;
  created_at: string;
  updated_at: string;
}

export const sortOrganizationalStructureItems = (
  items: ApiOrganizationalStructureItem[],
) =>
  [...items].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  );

export const getDynamicOrganizationalStructures = async () =>
  sortOrganizationalStructureItems(
    await fetchFirstWorkingPaginatedResource<ApiOrganizationalStructureItem>(
      "/organizational-structures?page=1&limit=100",
      (item): item is ApiOrganizationalStructureItem =>
        Boolean(
          item &&
            typeof item === "object" &&
            "title" in item &&
            "description" in item,
        ),
    ),
  );
