import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import ProductsGrid from "@/components/products/ProductsGrid";

export default function DepositoPage() {
	return (
		<MainLayout>
			<SectionLayout title="Deposito">
				<ProductsGrid category="deposito" link="/deposito" />
			</SectionLayout>
		</MainLayout>
	);
}
