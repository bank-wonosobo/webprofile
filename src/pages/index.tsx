import About from "@/components/about/About";
import MainLayout from "@/components/app/MainLayout";
// import BWCarousel from "@/components/commons/Carousel";
import CarouselAntD from "@/components/commons/CarouselAntD";
import Hero from "@/components/commons/Hero";
import InformationSection from "@/components/informations/InformationSection";
import ProductMenu from "@/components/products/ProductMenu";
import SimulatorList from "@/components/simulator/SimulationList";
import dynamic from "next/dynamic";
import Head from "next/head";

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
        {/* <BWCarousel /> */}
        <CarouselAntD />
        <ProductMenu />
        <About />
        <SimulatorList />
        <InformationSection />
        <MapClient />
      </MainLayout>
    </>
  );
}
