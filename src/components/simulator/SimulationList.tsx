import SimulatorDeposit from "./SimulatorDeposit";

const SimulatorList: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#f0f5f8]">
      <div className="mx-auto container">
        <h2 className="text-black font-bold text-center text-lg lg:text-3xl ">
          Simulasi Kredit & Depoito
        </h2>
        <div className="w-full mt-8 flex justify-center items-center gap-6 flex-col lg:flex-row">
          <SimulatorDeposit />
        </div>
      </div>
    </section>
  );
};

export default SimulatorList;
