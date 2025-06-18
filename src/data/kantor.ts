export interface Office {
	id: string;
	name: string;
	address: string;
	phone_number: string;
	map_link: string;
}

export interface OfficeApiResponse {
	message: string;
	data: Office[];
	page: number;
	limit: number;
	total: number;
	total_page: number;
}

export const getOffices = async (
	page = 1,
	limit = 10
): Promise<OfficeApiResponse> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/offices?page=${page}&limit=${limit}`
	);

	if (!res.ok) {
		throw new Error("Gagal mengambil data kantor");
	}

	return await res.json();
};
