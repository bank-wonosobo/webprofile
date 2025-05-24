export default function PageTitle({ title }: { title: string }) {
	return (
		<section className="w-full pt-[100px] pb-20 bg-[url('/bg-hero-white.png')] bg-secondary/20 text-primary mb-6  bg-cover bg-center">
			<div className="mx-auto container">
				<div className="container text-center">
					<h1 className="text-3xl md:text-5xl font-bold ">{title}</h1>
				</div>
			</div>
		</section>
	);
}
