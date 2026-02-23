export const getBanners = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export default getBanners;
