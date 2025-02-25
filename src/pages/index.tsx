import About from "@/components/about/About";
import MainLayout from "@/components/app/MainLayout";
import BWCarousel from "@/components/commons/Carousel";
import InformationContainer from "@/components/informations/InformationContainer";
import ProductMenu from "@/components/products/ProductMenu";
import SimulatorList from "@/components/simulator/SimulationList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PT BPR Bank Wonosobo - Home Page</title>
      </Head>
      <MainLayout>
        <BWCarousel />
        <ProductMenu />
        <About />
        <SimulatorList />
        <section className="w-full py-20 bg-white">
          <div className="mx-auto container">
            <h2 className="text-black font-bold text-center text-lg lg:text-3xl ">
              News & Update
            </h2>
            <InformationContainer />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
