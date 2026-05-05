const rawPublicationBaseURL =
  process.env.PROFILE_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "";

const toAbsoluteUrl = (baseURL: string, path: string) => {
  const normalizedBaseURL = baseURL.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBaseURL}${normalizedPath}`;
};

const createPublicationBaseURL = (baseURL: string) => {
  if (!baseURL) return "";

  const normalizedBaseURL = baseURL.replace(/\/+$/, "");

  if (
    normalizedBaseURL.endsWith("/api/v1") ||
    normalizedBaseURL.endsWith("/publication")
  ) {
    return normalizedBaseURL;
  }

  return `${normalizedBaseURL}/api/v1`;
};

export const getPublicationEndpointCandidates = (resourcePath: string) => {
  if (!rawPublicationBaseURL) return [];

  const normalizedBase = createPublicationBaseURL(rawPublicationBaseURL);
  const candidates = [toAbsoluteUrl(normalizedBase, resourcePath)];

  if (rawPublicationBaseURL.includes("/publication")) {
    const bareBase = rawPublicationBaseURL.replace(/\/publication\/?$/, "");
    candidates.push(toAbsoluteUrl(`${bareBase}/api/v1`, resourcePath));
  }

  return [...new Set(candidates)];
};

export async function fetchFirstWorkingPaginatedResource<T>(
  resourcePath: string,
  isValidItem: (item: unknown) => item is T,
): Promise<T[]> {
  const endpointCandidates = getPublicationEndpointCandidates(resourcePath);

  for (const endpoint of endpointCandidates) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch resource: ${response.status}`);
      }

      const json = (await response.json()) as { data?: unknown[] };
      const items = (json.data ?? []).filter(isValidItem);

      if (items.length > 0) {
        return items;
      }
    } catch (error) {
      console.error(`Failed to load resource from ${endpoint}:`, error);
    }
  }

  return [];
}

export async function fetchFirstWorkingPaginatedResponse<T>(
  resourcePath: string,
  isValidItem: (item: unknown) => item is T,
): Promise<{
  data: T[];
  page: number;
  total: number;
  total_page: number;
}> {
  const endpointCandidates = getPublicationEndpointCandidates(resourcePath);

  for (const endpoint of endpointCandidates) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch resource: ${response.status}`);
      }

      const json = (await response.json()) as {
        data?: unknown[];
        page?: number;
        total?: number;
        total_page?: number;
      };

      return {
        data: (json.data ?? []).filter(isValidItem),
        page: json.page ?? 1,
        total: json.total ?? 0,
        total_page: json.total_page ?? 1,
      };
    } catch (error) {
      console.error(`Failed to load paginated resource from ${endpoint}:`, error);
    }
  }

  return {
    data: [],
    page: 1,
    total: 0,
    total_page: 1,
  };
}
