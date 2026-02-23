interface Pengumuman {
  id: string;
  title: string;
  content: string;
  author: string;
  target_audience: string;
  start_date: string;
  end_date: string;
  attachment_url: string | null;
  is_active: boolean;
  published_at: string | null;
  status: string;
  approved_by: string | null;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  message: string;
  data: Pengumuman[];
  page: number;
  limit: number;
  total: number;
  total_page: number;
}

export const getPengumuman = async (
  page: number = 1,
  limit: number = 10,
): Promise<ApiResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

// Fungsi backward compatibility untuk kode lama yang tidak menggunakan parameter
export const getPengumumanLegacy = async () => {
  return await getPengumuman(1, 10);
};

export default getPengumuman;
