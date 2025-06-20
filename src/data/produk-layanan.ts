export const getProducts = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?limit=16`
	);

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await response.json();
	return data;
};

export default getProducts;
