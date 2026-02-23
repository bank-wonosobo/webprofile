import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
// import BwDigitalPrivacyPolicy from "@/components/products/BwDigitalPrivacyPolicy";
import ProductsGrid from "@/components/products/ProductsGrid";
import Link from "next/link";

export default function BwzDigitalPage() {
	return (
		<MainLayout>
			<SectionLayout title="BW Digital">
				<ProductsGrid category="bw-digital" link="/bw-digital" />
				{/* <BwDigitalPrivacyPolicy /> */}
				<section className="bg-[#e8f1ff] p-4 border-l-4 border-[#004080]  text-[#004080] max-w-4xl">
					<p>
						Dengan menggunakan aplikasi BW Digital, Anda menyatakan telah
						membaca, memahami, dan menyetujui seluruh isi{" "}
						<Link
							href="/bw-digital/kebijakan-privasi"
							className="text-blue-600 font-bold hover:underline">
							Kebijakan Privasi
						</Link>{" "}
						yang berlaku.
					</p>
				</section>
			</SectionLayout>
		</MainLayout>
	);
}
