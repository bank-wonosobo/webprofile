import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import InformationContainer from "@/components/informations/InformationContainer";

export default function Informasi() {
	return (
		<MainLayout>
			<SectionLayout title="Berita & Pengumuman">
				<InformationContainer />
			</SectionLayout>
		</MainLayout>
	);
}
