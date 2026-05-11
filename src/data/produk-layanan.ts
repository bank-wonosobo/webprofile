export const getProducts = async (category: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=16&category=${category}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

export default getProducts;
