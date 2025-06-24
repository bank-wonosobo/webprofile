import { Noto_Sans } from "next/font/google";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { LuCalculator } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";
import Link from "next/link";

const notosans = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-notosans",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter();

	useEffect(() => {
		const handleScrollTop = () => window.scrollTo(0, 0);
		router.events.on("routeChangeComplete", handleScrollTop);
		return () => {
			router.events.off("routeChangeComplete", handleScrollTop);
		};
	}, [router.events]);

	return (
		<div className={`${notosans.variable}`}>
			<header className="w-full bg-slate-100">
				<div className="mx-auto p-3 container flex justify-end">
					<ul className="flex gap-x-4 font-normal text-xs mx-1">
						<li>
							<Link
								href="/#simulator"
								className="flex items-center justify-between gap-x-1 hover:text-secondary">
								<LuCalculator />
								Simulasi Keuangan
							</Link>
						</li>
						<li>
							<Link
								href="/jaringan-kantor"
								className="flex items-center justify-between gap-x-1 hover:text-secondary">
								<MdLocationPin />
								Lokasi
							</Link>
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

			<AnimatePresence mode="wait">
				<motion.main
					key={router.asPath}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="min-h-screen">
					{children}
				</motion.main>
			</AnimatePresence>

			<Footer />
		</div>
	);
};

export default MainLayout;
