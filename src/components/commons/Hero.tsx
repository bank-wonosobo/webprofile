import Link from "next/link";

const Hero: React.FC = () => {
	return (
		// <section className="w-full pb-20 bg-[url('/bg-hero-white.png')] bg-secondary/20 text-primary  bg-cover bg-center">
		// 	<div className="mx-auto container">
		// 		<div className="container px-4">
		// 			<h1 className="text-3xl md:text-5xl font-bold mb-6">
		// 				Bank-nge Wong Wonosobo
		// 			</h1>
		// 			<p className="font-normal mb-6">
		// 				Memberikan Layanan Perbankan yang Mudah, Aman, dan Terpercaya untuk
		// 				Masyarakat Wonosobo dan Sekitarnya
		// 			</p>
		// 			<Link href="/profil">
		// 				<button className="bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-3  px-8 rounded-full">
		// 					Info Perusahaan
		// 				</button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </section>
		<section className="w-full bg-[url('/bg-hero-white.png')] bg-[#f0f5f8] text-primary bg-cover bg-center h-[350px] flex items-center mb-8">
			<div className="mx-auto container px-4">
				<div className="container">
					<h1 className="text-3xl md:text-5xl font-bold mb-6">
						Bank-nge Wong Wonosobo
					</h1>
					<p className="font-normal mb-6">
						Memberikan Layanan Perbankan yang Mudah, Aman, dan Terpercaya untuk
						Masyarakat Wonosobo dan Sekitarnya
					</p>
					<Link href="/profil">
						<button className="bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-3 px-8 rounded-full">
							Info Perusahaan
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
