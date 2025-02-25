import AboutList from "./AboutList";

const About = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto container">
        <h2 className="text-black font-bold text-center text-lg lg:text-3xl ">
          Kenapa Memilih Bank Wonosobo
        </h2>
        <div className="flex w-full flex-col md:flex-row gap-5 items-center p-4 mt-8">
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-primary text-white  shadow-lg absolute w-28 h-10 flex justify-center items-center  -translate-x-32 rounded-full animate-pulse">
              <p className="font-bold">Aman</p>
            </div>
            <div className="bg-secondary text-white shadow-lg absolute w-28 h-10 flex justify-center items-center  translate-x-32 translate-y-32 rounded-full animate-pulse">
              <p className="font-bold">Mudah</p>
            </div>
            <div className="bg-white border shadow-lg absolute w-28 h-10 flex justify-center items-center  translate-x-32 -translate-y-32 rounded-full animate-pulse">
              <p className="font-bold">Nyaman</p>
            </div>
            <img src="wulan.png" className="max-w-[70%] min-w-[50%]" />
          </div>
          <div className="flex-1 w-full">
            <AboutList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
