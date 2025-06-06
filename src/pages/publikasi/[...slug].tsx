import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TabelLaporan from "@/components/publikasi/TabelLaporan";
import { Card, Breadcrumb } from "antd";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();

	const slug = router.query.slug;

	const [id_report_type, nama_report] = Array.isArray(slug)
		? slug
		: [null, null];

	if (!id_report_type || !nama_report) {
		return (
			<MainLayout>
				<SectionLayout title="Memuat...">
					<div className="flex justify-center items-center h-64">
						<p className="text-gray-500">Sedang mengambil data laporan...</p>
					</div>
				</SectionLayout>
			</MainLayout>
		);
	}

	// Ubah format nama_report jadi kapital di awal kata (opsional)
	const pageTitle = decodeURIComponent(nama_report)
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return (
		<MainLayout>
			<SectionLayout title={pageTitle}>
				{/* Breadcrumb */}
				<div className="mb-4">
					<Breadcrumb
						items={[
							{
								href: "/",
								title: (
									<div className="flex items-center gap-1">
										<HomeOutlined />
										<span>Beranda</span>
									</div>
								),
							},
							{
								href: "/publikasi",
								title: (
									<div className="flex items-center gap-1">
										<FileTextOutlined />
										<span>Publikasi</span>
									</div>
								),
							},
							{
								title: pageTitle,
							},
						]}
					/>
				</div>

				<Card className="shadow-sm">
					<div className="mb-6">
						<div className="flex items-center justify-between flex-wrap gap-4">
							<div>
								<h2 className="text-xl font-semibold text-gray-800 mb-2">
									{pageTitle}
								</h2>
								<p className="text-gray-600">
									Daftar laporan yang tersedia untuk publikasi
								</p>
							</div>
						</div>
					</div>

					<TabelLaporan slug={id_report_type} />
				</Card>
			</SectionLayout>
		</MainLayout>
	);
}
