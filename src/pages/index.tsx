import About from "./components/about/About";
import BWCarousel from "./components/commons/Carousel";
import Footer from "./components/commons/Footer";
import Navbar from "./components/commons/Navbar";
import InformationContainer from "./components/informations/InformationContainer";
import ProductMenu from "./components/products/ProductMenu";
import SimulatorList from "./components/simulator/SimulationList";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
