export const getLaporanPublikasiByType = async (
	year: string,
	reportId: string,
	page: number = 1,
	limit: number = 10
) => {
	const params = new URLSearchParams({
		page: page.toString(),
		limit: limit.toString(),
	});

	if (year) {
		params.set("year", year);
	}

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/reports/${reportId}/report-type?${params}`
	);

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await response.json();
	return data.data;
};

export const getAvailableYears = () => {
	const currentYear = new Date().getFullYear();
	return Array.from({ length: 15 }, (_, i) => currentYear - i);
};

export default getLaporanPublikasiByType;
