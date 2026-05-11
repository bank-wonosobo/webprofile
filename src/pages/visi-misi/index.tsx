import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import {
	getDynamicVisionMission,
	type ApiVisionMissionItem,
} from "@/data/vision-mission";

interface VisiMisiPageProps {
	items?: ApiVisionMissionItem[];
}

const EmptyVisionMissionContent = () => (
	<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
		<h2 className="text-xl font-semibold text-primary">
			Visi & misi belum tersedia
		</h2>
		<p className="mt-3 text-sm leading-relaxed text-gray-600">
			Data visi dan misi dari `bw-admin` / `publikasi-api` belum ditemukan atau
			belum bisa dimuat saat ini.
		</p>
	</div>
);

export default function VisiMisi({ items = [] }: VisiMisiPageProps) {
	return (
		<MainLayout>
			<SectionLayout title="Visi & Misi">
				<div className="flex justify-center items-center flex-col">
					<div className="max-w-4xl font-light space-y-10">
						{items.length > 0 ? (
							items.map((item) => (
								<section key={item.id} className="space-y-6">
									<div className="space-y-2">
										<h2 className="text-2xl font-bold text-center text-secondary">
											{item.title}
										</h2>
									</div>

									{item.image_url ? (
										<img
											src={item.image_url}
											alt={item.title}
											className="w-full rounded-2xl object-cover shadow-sm"
										/>
									) : null}

									<div className="space-y-3">
										<div
											className="prose prose-slate max-w-none text-lg text-primary text-center"
											dangerouslySetInnerHTML={{ __html: item.vision }}
										/>
									</div>

									<div className="space-y-2">
										<h2 className="text-2xl font-bold text-center text-secondary">
											MISI - MISI
										</h2>
									</div>

									<div className="space-y-3">
										<div
											className="prose prose-slate max-w-none text-primary"
											dangerouslySetInnerHTML={{ __html: item.mission }}
										/>
									</div>
								</section>
							))
						) : (
							<EmptyVisionMissionContent />
						)}
						<div className="flex justify-between mt-6 text-base text-right border-t border-gray-200 pt-6">
							<Link
								href="/struktur-organisasi"
								className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
								<LeftOutlined />
								Struktur Organisasi
							</Link>
							<Link
								href="/jaringan-kantor"
								className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
								Jaringan Kantor
								<RightOutlined />
							</Link>
						</div>
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<VisiMisiPageProps> =
	async () => {
		const items = await getDynamicVisionMission();

		return {
			props: {
				items,
			},
		};
	};
