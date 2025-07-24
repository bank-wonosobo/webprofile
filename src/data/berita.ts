interface NewsItem {
	id: string;
	title: string;
	slug: string;
	content: string;
	author: string;
	image_url: string;
	published_at: string | null;
	status: string;
	approved_by: string | null;
	created_at: string;
	updated_at: string;
}

interface ApiResponse {
	message: string;
	data: NewsItem[];
	page: number;
	limit: number;
	total: number;
	total_page: number;
}

export const getBerita = async (
	page: number = 1,
	limit: number = 8
): Promise<ApiResponse> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/news?page=${page}&limit=${limit}`
	);

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await response.json();
	return data;
};

// Fungsi backward compatibility untuk kode lama yang tidak menggunakan parameter
export const getBeritaLegacy = async () => {
	return await getBerita(1, 8);
};

export default getBerita;
