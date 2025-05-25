import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TableJaringanKantor from "@/components/profil/JaringanKantor";
import { Card } from "antd";

export default function JaringanKantor() {
	return (
		<MainLayout>
			<SectionLayout title="Jaringan Kantor">
				<Card className="mb-6">
					<TableJaringanKantor />
				</Card>
			</SectionLayout>
		</MainLayout>
	);
}
