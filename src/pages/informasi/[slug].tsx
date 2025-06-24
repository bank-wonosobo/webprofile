import { useState } from "react";
import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import NewsDetail from "@/components/informations/NewsDetail";
import { useRouter } from "next/router";
import { Breadcrumb } from "antd";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Page() {
	const router = useRouter();
	const [newsTitle, setNewsTitle] = useState<string>("");
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isNotFound, setIsNotFound] = useState(false);

	const slug = Array.isArray(router.query.slug)
		? router.query.slug[0]
		: router.query.slug ?? "";

	const displayTitle = newsTitle || slug;

	const handleError = (message: string) => {
		setFetchError(message);
		if (
			message.includes("tidak ditemukan") ||
			message.includes("record not found")
		) {
			setIsNotFound(true);
		}
	};

	if (!slug) {
		return (
			<MainLayout>
				<SectionLayout title="Memuat...">
					<p>Sedang mengambil berita...</p>
				</SectionLayout>
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<SectionLayout
				title={isNotFound ? "Berita Tidak Ditemukan" : displayTitle}>
				{fetchError && !isNotFound ? (
					<div className="text-center text-red-500 py-10">
						<p className="mb-4">{fetchError}</p>
						<button
							onClick={() => window.location.reload()}
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
							Coba Lagi
						</button>
					</div>
				) : (
					<>
						{/* Breadcrumb - Don't show for 404 pages */}
						{!isNotFound && (
							<div className="">
								<Breadcrumb
									items={[
										{
											title: (
												<Link href="/">
													<div className="flex items-center gap-1">
														<HomeOutlined />
														<span>Beranda</span>
													</div>
												</Link>
											),
										},
										{
											title: (
												<Link href="/informasi">
													<div className="flex items-center gap-1">
														<FileTextOutlined />
														<span>Informasi</span>
													</div>
												</Link>
											),
										},
										{
											title: displayTitle,
										},
									]}
								/>
							</div>
						)}

						<NewsDetail
							slug={slug}
							onTitleLoad={setNewsTitle}
							onError={handleError}
						/>
					</>
				)}
			</SectionLayout>
		</MainLayout>
	);
}
