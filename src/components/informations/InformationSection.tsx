import InformationContainer from "./InformationContainer";

const InformationSection: React.FC = () => {
	return (
		<section className="w-full py-10 bg-[#f0f5f8]">
			<div className="mx-auto container">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl mb-5">
					Berita & Pengumuman
				</h2>
				<InformationContainer />
			</div>
		</section>
	);
};

export default InformationSection;
