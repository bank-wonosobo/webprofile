import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();
	const slug = Array.isArray(router.query.slug)
		? router.query.slug[0]
		: router.query.slug ?? "";

	return (
		<MainLayout>
			<SectionLayout title={slug}>
				<p>Post: {slug}</p>
			</SectionLayout>
		</MainLayout>
	);
}
