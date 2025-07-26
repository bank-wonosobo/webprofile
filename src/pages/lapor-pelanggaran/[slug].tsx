import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { useRouter } from "next/router";
import { Card, Table, Tag } from "antd";

export default function DetailLaporan() {
	const router = useRouter();
	const { slug } = router.query;

	// Fungsi untuk menampilkan status dengan warna tag
	const renderStatusTag = (status: string) => {
		const statusLower = status.toLowerCase();

		switch (statusLower) {
			case "pending":
				return (
					<Tag color="gold" className="text-xs">
						Pending
					</Tag>
				);
			case "diproses":
				return (
					<Tag color="green" className="text-xs">
						Diproses
					</Tag>
				);
			case "selesai":
				return (
					<Tag color="blue" className="text-xs">
						Selesai
					</Tag>
				);
			default:
				return (
					<Tag color="default" className="text-xs">
						{status}
					</Tag>
				);
		}
	};

	// Data dummy yang akan ditampilkan dalam tabel
	const data = [
		{ key: "1", label: "ID Laporan", value: slug },
		{ key: "2", label: "Jenis Aduan", value: "Pengaduan Masyarakat Sipil" },
		{ key: "3", label: "Nama Terlapor", value: "Paijo maning" },
		{ key: "4", label: "Email Terlapor", value: "selamat@dunya.akhirat" },
		{ key: "5", label: "Lokasi Kejadian", value: "Bank Wonosobo Barat" },
		{ key: "6", label: "Waktu Kejadian", value: "7 Maret 2025, 15:04" },
		{
			key: "7",
			label: "Uraian",
			value: "telah terjadi kasus perselingkuhan plus perkelahian",
		},
		{ key: "8", label: "Nama Pelapor", value: "Paijo maning" },
		{ key: "9", label: "Nomor HP Pelapor", value: "085155380996" },
		{
			key: "10",
			label: "Status",
			value: renderStatusTag("pending"), // ubah ke "diproses" atau "selesai" untuk tes
		},
	];

	return (
		<MainLayout>
			<SectionLayout title="Detail Aduan">
				<Card className="mb-6">
					<p className="mb-4 text-lg font-semibold">Detail Aduan </p>
					<Table
						size="middle"
						pagination={false}
						showHeader={false}
						dataSource={data}
						columns={[
							{
								dataIndex: "label",
								key: "label",
								width: "20%",
								className: "font-bold",
							},
							{ dataIndex: "value", key: "value" },
						]}
						bordered
						className="mb-6"
					/>

					<div>
						<p className="mb-2 font-medium">Bukti Pengaduan:</p>
						<img
							src="https://is3.cloudhost.id/storage-main/complaint/evidence/1752407928.png"
							alt="Bukti"
							className="rounded max-w-md border shadow"
						/>
					</div>
				</Card>
			</SectionLayout>
		</MainLayout>
	);
}
