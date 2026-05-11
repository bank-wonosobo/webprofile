import { fetchFirstWorkingPaginatedResponse } from "./publication-api";

export interface ApiAuctionItem {
  id: string;
  title: string;
  description: string;
  image_url?: string | null;
  link: string;
}

export const getAuctions = async (page: number, limit: number) =>
  fetchFirstWorkingPaginatedResponse<ApiAuctionItem>(
    `/auctions?page=${page}&limit=${limit}`,
    (item): item is ApiAuctionItem =>
      Boolean(
        item &&
          typeof item === "object" &&
          "title" in item &&
          "description" in item &&
          "link" in item,
      ),
  );
