export const getBeritaBySlug = async (slug: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/news/${slug}/slug`
	);

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await response.json();
	// console.log("Fetched news data:", data);
	return data;
};

export default getBeritaBySlug;
