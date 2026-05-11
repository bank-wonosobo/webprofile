import { fetchFirstWorkingPaginatedResource } from "./publication-api";

export interface TextSection {
  title: string;
  paragraphs?: string[];
  alphaItems?: string[];
  decimalItems?: string[];
  discItems?: string[];
}

export interface CapitalContribution {
  yearLabel: string;
  amount: string;
  resultingCapital: string;
}

export interface ManagementProfile {
  role: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
}

export interface ExecutiveProfile {
  role: string;
  description: string;
}

export interface CompanyProfileData {
  companyInfo: TextSection;
  companyFunctionsIntro: string;
  companyGoalsIntro: string;
  companyScopeIntro: string;
  ownership: TextSection;
  capitalContributions: CapitalContribution[];
  managementIntro: string[];
  managementChart: {
    image: string;
    alt: string;
  };
  commissionersAndDirectors: ManagementProfile[];
  executives: ExecutiveProfile[];
}

export interface ApiProfileItem {
  id: string;
  title: string;
  description: string;
  image_url?: string | null;
  created_at: string;
  updated_at: string;
}

export interface DynamicCompanyProfileData {
  sections: ApiProfileItem[];
}

export const sortProfileSections = (items: ApiProfileItem[]) =>
  [...items].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  );

export const getDynamicCompanyProfile = async (): Promise<DynamicCompanyProfileData | null> => {
  const sections = sortProfileSections(
    await fetchFirstWorkingPaginatedResource<ApiProfileItem>(
      "/profiles?page=1&limit=100",
      (item): item is ApiProfileItem =>
        Boolean(
          item &&
            typeof item === "object" &&
            "title" in item &&
            "description" in item,
        ),
    ),
  );

  return sections.length > 0 ? { sections } : null;
};
