import Head from "next/head";

export default function SectionLayout({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<section className="w-full bg-[url('/bg-hero-white.png')] bg-[#f0f5f8]  text-primary mb-6 bg-cover bg-center h-[130px] md:h-[230px] flex items-center">
				<div className="mx-auto container">
					<div className="container text-center">
						<h1 className="text-2xl md:text-5xl font-bold px-4 ">{title}</h1>
					</div>
				</div>
			</section>
			<section className="container mx-auto ">
				<div className="flex flex-col gap-y-4 mx-4">{children}</div>
			</section>
		</>
	);
}
