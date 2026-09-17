import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TabelRegulasiPPID from "@/components/informations/TabelRegulasiPPID";

export default function RegulasiInformasiPPID() {
	return (
		<MainLayout>
			<SectionLayout title="Regulasi Informasi PPID">
				<div className="max-w-6xl mx-auto font-light space-y-6 text-justify leading-relaxed">
					<p>
						Dasar hukum dan regulasi yang menjadi acuan PT BPR BANK WONOSOBO (Perseroda) dalam pelaksanaan Keterbukaan Informasi Publik adalah sebagai berikut:
					</p>
					
					<div className="mt-6">
						<TabelRegulasiPPID />
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
