import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const values = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <h2>Laporan WBS Baru!</h2>
      <p>Telah masuk laporan WBS baru dengan rincian sebagai berikut:</p>
      <ul>
        <li><b>Nama Terlapor:</b> ${values.reported_name}</li>
        <li><b>Jenis Aduan:</b> ${values.complaint_type}</li>
        <li><b>Lokasi Kejadian:</b> ${values.insident_location}</li>
        <li><b>Waktu Kejadian:</b> ${values.insident_time}</li>
      </ul>
      <p><b>Uraian Pengaduan:</b></p>
      <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
        ${values.description}
      </blockquote>
      <hr/>
      <p><i>Ini adalah email otomatis. Mohon cek dashboard sistem untuk melihat detail pelapor dan bukti lampiran (jika ada).</i></p>
    `;

    const targetEmails =
      process.env.DIREKSI_EMAILS;

    await transporter.sendMail({
      from:
        '"WBS Bank Wonosobo" <' +
        (process.env.SMTP_USER || "noreply@bankwonosobo.com") +
        ">",
      to: targetEmails,
      subject: "Pemberitahuan WBS: Terdapat Laporan Baru - Sistem Bank Wonosobo",
      html: emailHtml,
    });

    // console.log("Email notifikasi WBS berhasil dikirim ke Direksi");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Gagal mengirim email notifikasi WBS:", error);
    const err = error as { message?: string; code?: string };
    return res.status(500).json({
      success: false,
      error: err.message ?? "Terjadi kesalahan saat mengirim email",
    });
  }
}
