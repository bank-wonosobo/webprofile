"use server";

interface AduanPayload {
  reported_name: string;
  insident_location: string;
  insident_time: string;
  description: string;
  reporter_name: string;
  reporter_phone: string;
  reporter_email?: string;
  complaint_type: string;
  evidence_file?: File;
}

export async function postPelanggaran(values: AduanPayload) {
  const formData = new FormData();

  formData.append("reported_name", values.reported_name);
  formData.append("insident_location", values.insident_location);
  formData.append("insident_time", values.insident_time);
  formData.append("description", values.description);
  formData.append("reporter_name", values.reporter_name);
  formData.append("reporter_phone", values.reporter_phone);
  formData.append("complaint_type", values.complaint_type);

  if (values.reporter_email) {
    formData.append("reporter_email", values.reporter_email);
  }

  if (values.evidence_file) {
    formData.append("evidence_file", values.evidence_file);
  }

  // Debug isi FormData
  // for (const pair of formData.entries()) {
  // 	console.log(pair[0], pair[1]);
  // }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/complaints`, {
    method: "POST",
    body: formData,
  });

  // const responseText = await res.text();
  // console.log("🧾 Raw response:", responseText);

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error("API error response:", error);
    throw new Error(error.message || "Gagal mengirim aduan");
  }

  return res.json();
}
