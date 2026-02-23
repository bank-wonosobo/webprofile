export const getTipePelanggaran = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/complaint-types`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

export default getTipePelanggaran;
