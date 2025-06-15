import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TableJaringanKantor from "@/components/profil/JaringanKantor";
import { LeftOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Link from "next/link";

export default function JaringanKantor() {
	return (
		<MainLayout>
			<SectionLayout title="Jaringan Kantor">
				<Card className="">
					<TableJaringanKantor />
				</Card>
				<div className="flex justify-between text-base">
					<Link
						href="/profil"
						className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
						<LeftOutlined />
						Kembali: Struktur Organisasi
					</Link>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
