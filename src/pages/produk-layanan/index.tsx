import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import ProductsGrid from "@/components/products/ProductsGrid";

export default function ProdukLayanan() {
	return (
		<MainLayout>
			<SectionLayout title="Produk & Layanan">
				<ProductsGrid />
			</SectionLayout>
		</MainLayout>
	);
}
