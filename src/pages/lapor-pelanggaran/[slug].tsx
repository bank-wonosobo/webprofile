import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { useRouter } from "next/router";

export default function DetailLaporan() {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<MainLayout>
			<SectionLayout title="Detail Laporan">
				<h1 className="text-xl font-bold">Detail Laporan: {slug}</h1>
			</SectionLayout>
		</MainLayout>
	);
}
