import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TabelLaporan from "@/components/publikasi/TabelLaporan";
import { Card, Breadcrumb } from "antd";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();

	const slug = Array.isArray(router.query.slug)
		? router.query.slug[0]
		: router.query.slug ?? "";

	// Format slug untuk display title
	const formatTitle = (slug: string): string => {
		return slug
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	if (!slug) {
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

	const pageTitle = formatTitle(slug);

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
									Daftar laporan tahunan yang tersedia untuk publikasi
								</p>
							</div>
							<Link
								href="/publikasi"
								className="text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1">
								<FileTextOutlined />
								<span>Semua Laporan</span>
							</Link>
						</div>
					</div>

					<TabelLaporan slug={slug} />
				</Card>

				{/* Debug info - hanya muncul di development mode
				{process.env.NODE_ENV === "development" && (
					<Card className="mt-4 bg-gray-50 border-dashed">
						<div className="text-sm text-gray-600">
							<strong>Debug Info:</strong>
							<ul className="mt-1 ml-4">
								<li>Slug: {slug}</li>
								<li>Report Type: {slug}</li>
								<li>Page Title: {pageTitle}</li>
							</ul>
						</div>
					</Card>
				)} */}
			</SectionLayout>
		</MainLayout>
	);
}
