import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";

export default function Profile() {
	return (
		<MainLayout>
			<SectionLayout title="Profil">
				<h1 className="text-3xl font-bold">Profil Bank Wonosobo</h1>
				<p className="text-sm text-slate-500">
					BPR Bank Wonosobo adalah lembaga keuangan yang memberikan layanan
					perbankan kepada masyarakat di Kabupaten Wonosobo. Kami berkomitmen
					untuk memberikan layanan terbaik dan membantu masyarakat dalam
					mewujudkan impian finansial mereka.
				</p>
			</SectionLayout>
		</MainLayout>
	);
}
