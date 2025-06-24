import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import ProductsGrid from "@/components/products/ProductsGrid";

export default function TabunganPage() {
	return (
		<MainLayout>
			<SectionLayout title="Tabungan">
				<ProductsGrid category="tabungan" link="/tabungan" />
			</SectionLayout>
		</MainLayout>
	);
}
