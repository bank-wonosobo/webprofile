import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TabelInformasiDikecualikan from "@/components/informations/TabelInformasiDikecualikan";

export default function DaftarInformasiDikecualikan() {
	return (
		<MainLayout>
			<SectionLayout title="Daftar Informasi Dikecualikan">
				<div className="max-w-6xl mx-auto font-light space-y-6 text-justify leading-relaxed">
					<p>
						Berikut adalah Daftar Informasi yang Dikecualikan oleh PT BPR BANK WONOSOBO (Perseroda). Informasi ini bersifat rahasia dan tidak dapat diakses oleh publik karena alasan hukum, kepatutan, dan perlindungan privasi.
					</p>

					<div className="mt-6">
						<TabelInformasiDikecualikan />
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
