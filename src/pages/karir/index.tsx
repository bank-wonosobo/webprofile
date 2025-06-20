import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import Image from "next/image";

export default function Karir() {
	return (
		<MainLayout>
			<SectionLayout title="Karir">
				<div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
					<Image
						src="/job-hunt.svg"
						alt="Karir"
						width={200}
						height={200}
						className="mb-4"
					/>
					<p className="text-base text-gray-600">
						Lowongan karir belum tersedia saat ini.
					</p>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
