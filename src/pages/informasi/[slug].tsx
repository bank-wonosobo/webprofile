import { useState } from "react";
import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import NewsDetail from "@/components/informations/NewsDetail";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();
	const [newsTitle, setNewsTitle] = useState<string>("");

	const slug = Array.isArray(router.query.slug)
		? router.query.slug[0]
		: router.query.slug ?? "";

	// Fallback title: gunakan slug jika title belum dimuat
	const displayTitle = newsTitle || slug;

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
			<SectionLayout title={displayTitle}>
				<NewsDetail slug={slug} onTitleLoad={setNewsTitle} />
			</SectionLayout>
		</MainLayout>
	);
}
