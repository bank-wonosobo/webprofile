import { Noto_Sans } from "next/font/google";
import React from "react";
import { LuCalculator } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";

const notosans = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-notosans",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className={`${notosans.variable}`}>
			<header className="w-full bg-slate-100 ">
				<div className="mx-auto p-3 container flex justify-end">
					<ul className="flex gap-x-4 font-normal text-xs ">
						<li>
							<a
								href="#"
								className="flex items-center justify-between gap-x-1 hover:text-secondary">
								<LuCalculator />
								Simulasi Keuangan
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-between gap-x-1 hover:text-secondary">
								<MdLocationPin />
								Lokasi
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-between gap-x-1 hover:text-secondary">
								<TbBrandWhatsappFilled />
								Bawon Whatsapp
							</a>
						</li>
					</ul>
				</div>
			</header>
			<Navbar />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
