import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import Image from "next/image";

export default function Karir() {
	return (
		<MainLayout>
			<SectionLayout title="Lelang">
				<div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
					<Image
						src="/lelang.svg"
						alt="Karir"
						width={250}
						height={250}
						className="mb-4"
					/>
					<p className="text-base text-gray-600">
						Lelang belum tersedia saat ini.
					</p>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
