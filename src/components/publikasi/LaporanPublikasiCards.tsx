import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";

const LaporanPublikasiCards: React.FC = () => {
	const publikasi = [
		{
			name: "Laporan Tahunan",
			icon: <LuFiles size={30} className="text-primary" />,
			href: "/laporan-tahunan",
		},
		{
			name: "Laporan Tata Kelola",
			icon: <LuFiles size={30} className="text-primary" />,
			href: "/laporan-tatakelola",
		},
		{
			name: "Laporan Publikasi",
			icon: <LuFiles size={30} className="text-primary" />,
			href: "/laporan-publikasi",
		},
		{
			name: "Laporan Triwulan",
			icon: <LuFiles size={30} className="text-primary" />,
			href: "/laporan-triwulan",
		},
		{
			name: "Laporan Keberlanjutan",
			icon: <LuFiles size={30} className="text-primary" />,
			href: "/laporan-keberlanjutan",
		},
	];
	return (
		<section className="w-full ">
			<div className="mx-auto container">
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
					{publikasi.map((product) => (
						<Link
							key={product.name}
							href={product.href}
							className="max-w-[350px] max-h-[300px] p-4 lg:p-8  bg-white rounded-xl  hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-pointer border bordeer-black/5">
							<div className="bg-secondary/15 p-6 inline-block rounded-[30px]">
								{product.icon}
							</div>
							<h3 className="mt-4 lg:mt-6 font-bold text-xl  text-primary">
								{product.name}
							</h3>
							<div className="text-sm mt-4 flex items-center gap-x-2 hover:text-secondary text-primary font-normal">
								Selengkapnya <FaArrowRight />
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default LaporanPublikasiCards;
