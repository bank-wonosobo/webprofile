export default async function getPengumumanById(id: string) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcements/slug/${id}`,
			{
				next: { revalidate: 60 }, // ISR
			}
		);

		if (!res.ok) return null;

		const json = await res.json();
		return json?.data ?? null;
	} catch (error) {
		console.error("Error fetching pengumuman:", error);
		return null;
	}
}
