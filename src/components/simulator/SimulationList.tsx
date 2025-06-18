import SimulatorDeposit from "./SimulatorDeposit";

const SimulatorList: React.FC = () => {
	return (
		<section className="w-full bg-white mb-8">
			<div className="mx-auto container py-8 px-4">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl mb-8">
					Simulasi Kredit & Depoito
				</h2>
				<div className="w-full flex justify-around items-center md:items-end flex-col lg:flex-row ">
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
