// pengumuman-slug.ts

export interface Announcement {
	id: string;
	title: string;
	content: string;
	author: string;
	target_audience: string;
	start_date: string;
	end_date: string;
	attachment_url: string;
	is_active: boolean;
	published_at: string;
	status: string;
	approved_by: string;
	created_at: string;
	updated_at: string;
}

export const fetchPengumumanById = async (
	id: string
): Promise<Announcement | null> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcements/${id}`
		);
		if (!response.ok) throw new Error("Gagal mengambil data");
		const result = await response.json();
		return result.data ?? null;
	} catch (error) {
		console.error("Fetch error:", error);
		return null;
	}
};
