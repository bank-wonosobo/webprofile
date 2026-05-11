import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import {
	getDynamicOrganizationalStructures,
	type ApiOrganizationalStructureItem,
} from "@/data/organizational-structure";

interface StrukturOrganisasiPageProps {
	items?: ApiOrganizationalStructureItem[];
}

const EmptyOrganizationalStructureContent = () => (
	<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
		<h2 className="text-xl font-semibold text-primary">
			Struktur organisasi belum tersedia
		</h2>
		<p className="mt-3 text-sm leading-relaxed text-gray-600">
			Data struktur organisasi dari `bw-admin` / `publikasi-api` belum ditemukan
			atau belum bisa dimuat saat ini.
		</p>
	</div>
);

export default function StrukturOrganisasi({
	items = [],
}: StrukturOrganisasiPageProps) {
	return (
		<MainLayout>
			<SectionLayout title="Struktur Organisasi">
				<div className="mx-auto container max-w-4xl px-4 leading-relaxed font-light">
					<div className="space-y-10">
						{items.length > 0 ? (
							items.map((item) => (
								<section key={item.id} className="space-y-4">
									<h2 className="text-2xl font-bold text-primary">
										{item.title}
									</h2>
									<div
										className="prose prose-slate max-w-none"
										dangerouslySetInnerHTML={{ __html: item.description }}
									/>
									{item.image_url ? (
										<img
											src={item.image_url}
											alt={item.title}
											className="w-full rounded-2xl object-cover shadow-sm"
										/>
									) : null}
								</section>
							))
						) : (
							<EmptyOrganizationalStructureContent />
						)}
					</div>
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

export const getServerSideProps: GetServerSideProps<StrukturOrganisasiPageProps> =
	async () => {
		const items = await getDynamicOrganizationalStructures();

		return {
			props: {
				items,
			},
		};
	};
