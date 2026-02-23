export interface ComplaintDetail {
	id: string;
	complaint_id: string;
	reported_name: string;
	email: string;
	insident_location: string;
	insident_time: string;
	description: string;
	evidence_url: string;
	reporter_name: string;
	reporter_phone: string;
	status: "pending" | "diproses" | "selesai" | string;
	complaint_type: string;
}

export async function getComplaintById(id: string): Promise<ComplaintDetail> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/complaints/${id}/id`
	);

	if (!res.ok) {
		const err = await res.text();
		throw new Error(err || "Gagal mengambil detail aduan.");
	}

	const json = await res.json();

	return json.data as ComplaintDetail;
}
