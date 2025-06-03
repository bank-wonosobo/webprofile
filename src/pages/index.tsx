import About from "@/components/about/About";
import MainLayout from "@/components/app/MainLayout";
import BWCarousel from "@/components/commons/Carousel";
import Hero from "@/components/commons/Hero";
import InformationSection from "@/components/informations/InformationSection";
import ProductMenu from "@/components/products/ProductMenu";
import SimulatorList from "@/components/simulator/SimulationList";
import Head from "next/head";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("../components/commons/Maps"), {
	ssr: false,
});
export default function Home() {
	return (
		<>
			<Head>
				<title>PT BPR Bank Wonosobo - Home Page</title>
			</Head>
			<MainLayout>
				<Hero />
				<BWCarousel />
				<ProductMenu />
				<About />
				<SimulatorList />
				<InformationSection />
				<MapClient />
			</MainLayout>
		</>
	);
}
