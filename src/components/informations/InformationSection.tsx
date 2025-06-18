import InformationContainer from "./InformationContainer";

const InformationSection: React.FC = () => {
	return (
		<section className="w-full bg-[#f0f5f8]">
			<div className="mx-auto container mb-8 px-4 py-8">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl mb-8">
					Informasi
				</h2>
				<InformationContainer />
			</div>
		</section>
	);
};

export default InformationSection;
