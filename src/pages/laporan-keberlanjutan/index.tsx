import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import TabelLaporanTahunan from "@/components/publikasi/LaporanTahunan";
import { Card } from "antd";
import Link from "next/link";

export default function LaporanKeberlanjutan() {
	return (
		<MainLayout>
			<SectionLayout title="Laporan Keberlanjutan">
				<Card className="shadow-sm">
					<div className="mb-4">
						<div className="flex items-center justify-between">
							<p className="text-gray-600">
								Daftar laporan tahunan yang tersedia untuk publikasi
							</p>
							<Link href="/publikasi" className="text-blue-400 hover:underline">
								Semua Laporan
							</Link>
						</div>
					</div>
					<TabelLaporanTahunan />
				</Card>
			</SectionLayout>
		</MainLayout>
	);
}
