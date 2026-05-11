import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import {
	type ApiProfileItem,
	getDynamicCompanyProfile,
} from "@/data/profile";
import { RightOutlined } from "@ant-design/icons";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

interface ProfilePageProps {
	dynamicSections?: ApiProfileItem[];
}

const DynamicProfileContent = ({ sections }: { sections: ApiProfileItem[] }) => (
	<div className="space-y-8">
		{sections.map((section) => (
			<section className="mx-auto container max-w-4xl px-4 leading-relaxed font-light lg:items-center"
				key={section.id}>
				<div className="mb-5 flex items-center gap-3">
					<h2 className="text-base font-bold  ">
						{section.title}
					</h2>
				</div>

				<div
					className={`${
						section.image_url
							? "grid grid-cols-1 items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)]"
							: "block"
					}`}>
					{section.image_url ? (
						<div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
							<Image
								width={560}
								height={640}
								src={section.image_url}
								alt={section.title}
								className="h-full w-full object-cover object-top"
							/>
						</div>
					) : null}
					<div
						className="prose prose-slate max-w-none text-justify leading-relaxed items-center"
						dangerouslySetInnerHTML={{ __html: section.description }}
					/>
				</div>
			</section>
		))}
	</div>
);

const EmptyProfileContent = () => (
	<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
		<h2 className="text-xl font-semibold text-primary">Profil belum tersedia</h2>
		<p className="mt-3 text-sm leading-relaxed text-gray-600">
			Data profil dari `bw-admin` / `publikasi-api` belum ditemukan atau belum
			bisa dimuat saat ini.
		</p>
	</div>
);

export default function Profile({
	dynamicSections,
}: ProfilePageProps) {
	const sections = dynamicSections ?? [];

	return (
		<MainLayout>
			<SectionLayout title="Profil">
				<div className="mx-auto container max-w-5xl px-4">
					{sections.length > 0 ? (
						<DynamicProfileContent sections={sections} />
					) : (
						<EmptyProfileContent />
					)}
					<div className="text-right mt-6 border-t border-gray-200 pt-6">
						<Link
							href="/struktur-organisasi"
							className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 gap-1">
							Struktur Organisasi <RightOutlined />
						</Link>
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async () => {
	const dynamicProfile = await getDynamicCompanyProfile();

	return {
		props: {
			dynamicSections: dynamicProfile?.sections ?? [],
		},
	};
};
