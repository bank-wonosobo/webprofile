import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import BwDigitalPrivacyPolicy from "@/components/products/BwDigitalPrivacyPolicy";

export default function BwzDigitalPage() {
	return (
		<MainLayout>
			<SectionLayout title="BW Digital">
				<BwDigitalPrivacyPolicy />
			</SectionLayout>
		</MainLayout>
	);
}
