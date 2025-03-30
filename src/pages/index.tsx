import About from "@/components/about/About";
import MainLayout from "@/components/app/MainLayout";
import BWCarousel from "@/components/commons/Carousel";
import InformationContainer from "@/components/informations/InformationContainer";
import ProductMenu from "@/components/products/ProductMenu";
import SimulatorList from "@/components/simulator/SimulationList";
import Search from "antd/es/input/Search";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PT BPR Bank Wonosobo - Home Page</title>
      </Head>
      <MainLayout>
        <section className="w-full pt-[100px] pb-20 bg-[url('/bg-hero-white.png')] bg-orange-50   bg-cover bg-center">
          <div className="mx-auto container">
            <div className="container">
              <h1 className="text-5xl font-bold">Bank Wonosobo</h1>
              <p className="font-normal mt-3">
                Bank UMKM nya Kabupaten Wonosobo
              </p>
              <Search
                className="mt-4"
                placeholder="input search text"
                // onSearch={onSearch}
                style={{ width: 200 }}
              />
            </div>
          </div>
        </section>

        <BWCarousel />
        <ProductMenu />
        <About />
        <SimulatorList />
        <InformationContainer />
      </MainLayout>
    </>
  );
}
