import MainLayout from "@/components/app/MainLayout";
import PageTitle from "@/components/commons/PageTitle";

export default function StrukturOrganisasi() {
	return (
		<MainLayout>
			<PageTitle title="Struktur Organisasi" />
			<section className="container mx-auto ">
				<div className="flex flex-col gap-y-4 mx-4">
					<h1 className="text-3xl font-bold">Profil Bank Wonosobo</h1>
					<p className="text-sm text-slate-500">
						BPR Bank Wonosobo adalah lembaga keuangan yang memberikan layanan
						perbankan kepada masyarakat di Kabupaten Wonosobo. Kami berkomitmen
						untuk memberikan layanan terbaik dan membantu masyarakat dalam
						mewujudkan impian finansial mereka.
					</p>
				</div>
			</section>
		</MainLayout>
	);
}
