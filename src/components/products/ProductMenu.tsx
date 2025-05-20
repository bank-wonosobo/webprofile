import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdInstallMobile } from "react-icons/md";
import { PiHandDepositBold } from "react-icons/pi";
import { TbCreditCardPay, TbPigMoney } from "react-icons/tb";

const ProductMenu: React.FC = () => {
	const products = [
		{
			name: "Tabungan",
			icon: <TbPigMoney size={30} className="text-primary" />,
			tagline: "Menabung Lebih Mudah dan Aman, Masa Depan Lebih Cerah",
		},
		{
			name: "Deposito",
			icon: <PiHandDepositBold size={30} className="text-primary" />,
			tagline: "Menabung Lebih Mudah dan Aman, Masa Depan Lebih Cerah",
		},
		{
			name: "Kredit",
			icon: <TbCreditCardPay size={30} className="text-primary" />,
			tagline: "Menabung Lebih Mudah dan Aman, Masa Depan Lebih Cerah",
		},
		{
			name: "BW Digital",
			icon: <MdInstallMobile size={30} className="text-primary" />,
			tagline: "Layanan Digital Bank Wonosobo",
		},
	];
	return (
		<section className="w-full pt-10 pb-10 ">
			<div className="mx-auto container">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl ">
					Produk & Layanan Kami
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4 lg:mt-10">
					{products.map((product) => (
						<Link
							key={product.name}
							href={`/products/${product.name.toLowerCase()}`}
							className="bg-white p-4 md:p-7 mx-auto rounded-3xl cursor-pointer border border-black/5 hover:-translate-y-4 hover:shadow-xl transition-all shadow-sm md:min-w-[300px] max-w-[300px] ">
							<div className="bg-secondary/15 p-6 inline-block rounded-[30px]">
								{product.icon}
							</div>
							<h3 className="mt-2 font-bold text-xl  text-primary">
								{product.name}
							</h3>
							<p className="font-light text-xs md:text-sm mt-2 ">
								{product.tagline}
							</p>
							<div className="text-sm mt-10 md:flex items-center gap-x-2 hover:text-secondary text-primary font-normal hidden">
								Selengkapnya <FaArrowRight />
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductMenu;
