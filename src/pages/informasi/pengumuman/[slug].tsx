import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { useRouter } from "next/router";

export default function PengumumanDetail() {
	const router = useRouter();
	const { id } = router.query;

	// if (!id) return <p>Memuat ID...</p>;

	return (
		<MainLayout>
			<SectionLayout title="Pengumuman Detail">
				<div className="p-4">
					<h1 className="text-2xl font-bold mb-4">Pengumuman ID: {id}</h1>
					<p>Detail pengumuman akan ditampilkan di sini.</p>
					{/* Fetch and display pengumuman details using the id */}
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
