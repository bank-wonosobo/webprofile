import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import LaporanPublikasiCards from "@/components/publikasi/LaporanPublikasiCards";

export default function Publikasi() {
	return (
		<MainLayout>
			<SectionLayout title="Publikasi">
				<LaporanPublikasiCards />
			</SectionLayout>
		</MainLayout>
	);
}
