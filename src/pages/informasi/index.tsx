import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import NewsList from "@/components/informations/NewsList";

export default function Informasi() {
	return (
		<MainLayout>
			<SectionLayout title="Berita & Pengumuman">
				<NewsList />
			</SectionLayout>
		</MainLayout>
	);
}
