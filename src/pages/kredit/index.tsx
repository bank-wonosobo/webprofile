import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import ProductsGrid from "@/components/products/ProductsGrid";

export default function KreditPage() {
	return (
		<MainLayout>
			<SectionLayout title="Kredit">
				<ProductsGrid category="kredit" link="/kredit" />
			</SectionLayout>
		</MainLayout>
	);
}
