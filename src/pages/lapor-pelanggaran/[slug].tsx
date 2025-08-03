import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { useRouter } from "next/router";
import { Card, Table, Tag, Spin, Alert } from "antd";
import { getComplaintById, ComplaintDetail } from "@/data/complaint-by-id";
import { useEffect, useState } from "react";
import moment from "moment";
import { DownloadOutlined } from "@ant-design/icons";

export default function DetailLaporan() {
	const router = useRouter();
	const { slug } = router.query;

	const [data, setData] = useState<ComplaintDetail | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		if (!slug || typeof slug !== "string") return;

		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await getComplaintById(slug);
				setData(response);
			} catch (err) {
				if (err instanceof Error) setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [slug]);

	const renderStatusTag = (status: string) => {
		const statusLower = status.toLowerCase();

		switch (statusLower) {
			case "pending":
				return <Tag color="gold">Pending</Tag>;
			case "diproses":
				return <Tag color="green">Diproses</Tag>;
			case "selesai":
				return <Tag color="blue">Selesai</Tag>;
			default:
				return <Tag>{status}</Tag>;
		}
	};

	if (loading) {
		return (
			<MainLayout>
				<SectionLayout title="Detail Aduan">
					<Spin size="large" />
				</SectionLayout>
			</MainLayout>
		);
	}

	if (error) {
		return (
			<MainLayout>
				<SectionLayout title="Detail Aduan">
					<Alert
						type="error"
						className="text-center"
						message="Data tidak ditemukan"
					/>
				</SectionLayout>
			</MainLayout>
		);
	}

	if (!data) return null;

	const tableData = [
		{ key: "1", label: "ID Laporan", value: data.id },
		{ key: "2", label: "Jenis Aduan", value: data.complaint_type },
		{ key: "3", label: "Nama Terlapor", value: data.reported_name },
		// { key: "4", label: "Email Terlapor", value: data.email },
		{ key: "5", label: "Lokasi Kejadian", value: data.insident_location },
		{
			key: "6",
			label: "Waktu Kejadian",
			value: moment(data.insident_time).format("D MMMM YYYY, HH:mm"),
		},
		{ key: "7", label: "Uraian", value: data.description },
		// { key: "8", label: "Nama Pelapor", value: data.reporter_name },
		// { key: "9", label: "Nomor HP Pelapor", value: data.reporter_phone },
		{ key: "10", label: "Status", value: renderStatusTag(data.status) },
	];

	return (
		<MainLayout>
			<SectionLayout title="Detail Aduan">
				<Card className="mb-6">
					<p className="mb-4 text-lg font-semibold">Detail Aduan</p>

					<Table
						size="middle"
						pagination={false}
						showHeader={false}
						dataSource={tableData}
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

					{data.evidence_url && (
						<div>
							<p className="mb-2 font-medium">Bukti Pengaduan:</p>
							<div
								className="flex justify-between items-center p-4 px-6 w-full lg:w-1/4 md:w-3/4 bg-primary text-white transition-colors rounded-full cursor-pointer hover:bg-primary/80"
								onClick={() => window.open(data.evidence_url, "_blank")}
								role="link">
								<p>Unduh / lihat bukti pengaduan </p>

								<DownloadOutlined style={{ fontSize: 24 }} />
							</div>
						</div>
					)}
				</Card>
			</SectionLayout>
		</MainLayout>
	);
}
