import SimulatorDeposit from "./SimulatorDeposit";

const SimulatorList: React.FC = () => {
	return (
		<section className="w-full py-10 bg-white">
			<div className="mx-auto container">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl ">
					Simulasi Kredit & Depoito
				</h2>
				<div className="w-full mt-8 flex justify-around items-center gap-y-4 md:items-end flex-col lg:flex-row ">
					<SimulatorDeposit />

					<div className="hidden lg:block">
						<img src="investment2.svg" width={700} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SimulatorList;
