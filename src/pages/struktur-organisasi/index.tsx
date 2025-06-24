import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function StrukturOrganisasi() {
	return (
		<MainLayout>
			<SectionLayout title="Struktur Organisasi">
				<div className="mx-auto container max-w-4xl px-4 leading-relaxed font-light">
					<p className="text-justify ">
						Struktur Organisasi dan Tata Kerja PT BPR Bank Wonosobo (Perseroda)
						per 31 Desember 2024, untuk kantor pusat dan kantor kas adalah
						sebagaimana ditetapkan berdasarkan Keputusan Direksi Nomor
						054/SK/DIR/600557/IX/2024 yang secara grafis dijelaskan pada skema
						diagram sebagaimana disajikan berikut ini:
					</p>
					<img
						src="/struktur-organisasi.png"
						alt="Struktur Organisasi"
						className="w-full my-4 "
					/>
					<div className="flex justify-between mt-6 border-t border-gray-200 pt-6 mb-6">
						<Link
							href="/profil"
							className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
							<LeftOutlined />
							Profil
						</Link>
						<Link
							href="/visi-misi"
							className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
							Visi & Misi
							<RightOutlined />
						</Link>
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
