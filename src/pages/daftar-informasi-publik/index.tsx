import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TabelInformasiPublik from "@/components/informations/TabelInformasiPublik";

export default function DaftarInformasiPublik() {
	return (
		<MainLayout>
			<SectionLayout title="Daftar Informasi Publik">
				<div className="max-w-6xl mx-auto font-light space-y-6 text-justify leading-relaxed">
					<p>
						Berikut adalah Daftar Informasi Publik yang disediakan oleh PT BPR BANK WONOSOBO (Perseroda). Informasi ini terbuka dan dapat diakses oleh masyarakat umum sesuai dengan ketentuan perundang-undangan yang berlaku.
					</p>
					
					<div className="mt-6">
						<TabelInformasiPublik />
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
