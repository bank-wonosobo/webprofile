import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdInstallMobile } from "react-icons/md";
import { PiHandDepositBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { TbCreditCardPay, TbMenu4, TbPigMoney } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	type MobileMenuKeys = "profile" | "products" | "publications";

	const [mobileMenuOpen, setMobileMenuOpen] = useState({
		profile: false,
		products: false,
		publications: false,
	});

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileSubmenu = (menu: MobileMenuKeys) => {
		setMobileMenuOpen({
			...mobileMenuOpen,
			[menu]: !mobileMenuOpen[menu],
		});
	};

	return (
		<div
			className={`sticky top-0 z-[100] w-full bg-white ${
				isFixed ? "shadow-sm border-b bg-opacity-80 backdrop-blur-sm" : ""
			} ${isOpen ? "h-screen overflow-y-auto" : ""}`}>
			<nav className=" py-2 w-full container mx-auto">
				<div className="flex flex-wrap items-center justify-between">
					{/* Logo */}
					<Link href="/" className="p-3">
						<img src="/static/logo-bw.svg" alt="" className="w-40" />
					</Link>

					{/* Mobile menu toggle button */}
					<div className="lg:hidden p-3 text-primary">
						<button onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <RxCross2 size={30} /> : <TbMenu4 size={30} />}
						</button>
					</div>

					{/* Desktop menu */}
					<ul className="hidden h-full relative text-sm lg:flex min-w-[430px] flex-row items-center justify-between text-primary font-semibold">
						<li className="hover:border-b-[3px] py-4 border-b-secondary px-3">
							<Link href={"/"} className="">
								Beranda
							</Link>
						</li>
						<li className="flex justify-between hover:border-b-[3px] border-b-secondary items-center relative">
							<Dropdown name="Profile">
								<Link href={"/profil"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Profil
									</li>
								</Link>
								<Link href={"/struktur-organisasi"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Struktur Organisasi
									</li>
								</Link>
								<Link href={"/visi-misi"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Visi & Misi
									</li>
								</Link>
								<Link href={"/jaringan-kantor"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Jaringan Kantor
									</li>
								</Link>
							</Dropdown>
						</li>
						<li className="flex justify-between items-center hover:border-b-[3px] border-b-secondary">
							<Dropdown name="Produk & Layanan">
								<Link href={"/tabungan"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
										<div className="flex gap-2 font-semibold">
											<TbPigMoney size={18} className="text-primary" />
											Tabungan
										</div>
										<p className="text-xs font-light mt-2">
											Nabung Lebih Mudah dan Aman
										</p>
									</li>
								</Link>
								<Link href={"/deposito"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
										<div className="flex gap-2 font-semibold">
											<PiHandDepositBold size={18} className="text-primary" />
											Deposito
										</div>
										<p className="text-xs font-light mt-2">
											Bunga Tabungan lebih
										</p>
									</li>
								</Link>
								<Link href={"/kredit"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
										<div className="flex gap-2 font-semibold">
											<TbCreditCardPay size={18} className="text-primary" />
											Kredit
										</div>
										<p className="text-xs font-light mt-2">
											Pinjaman Dengan Bunga Rendah
										</p>
									</li>
								</Link>
								<Link href={"/bw-digital"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
										<div className="flex gap-2 font-semibold">
											<MdInstallMobile size={18} className="text-primary" />
											BW Digital
										</div>
										<p className="text-xs font-light mt-2">
											Layanan Digital Bank Wonosobo
										</p>
									</li>
								</Link>
							</Dropdown>
						</li>
						<li className="px-3 hover:border-b-[3px] border-b-secondary py-4">
							<Link href={"#"}>Informasi</Link>
						</li>
						<li className="flex justify-between hover:border-b-[3px] border-b-secondary items-center relative">
							<Dropdown name="Publikasi">
								<Link href={"/laporan-tahunan"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Laporan Tahunan
									</li>
								</Link>
								<Link href={"/laporan-tatakelola"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Laporan Tata Kelola
									</li>
								</Link>
								<Link href={"/laporan-publikasi"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Laporan Publikasi
									</li>
								</Link>
								<Link href={"/laporan-triwulan"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Laporan Triwulan
									</li>
								</Link>
								<Link href={"/laporan-keberlanjutan"}>
									<li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
										Laporan Keberlanjutan
									</li>
								</Link>
							</Dropdown>
						</li>
						<li className="px-3 hover:border-b-[3px] border-b-secondary py-4">
							<Link href={"lelang"}>Lelang</Link>
						</li>
						<li className="px-3 hover:border-b-[3px] border-b-secondary py-4">
							<Link href={"karir"}>Karir</Link>
						</li>
						<li className="px-3 hover:border-b-[3px] border-b-secondary py-4">
							<Link href={"lapor-pelanggaran"}>Lapor Pelanggaran</Link>
						</li>
					</ul>
				</div>

				{/* Mobile menu */}
				{isOpen && (
					<div className="lg:hidden w-full mt-4 border-t pt-4">
						<ul className="flex flex-col space-y-3 text-primary font-medium">
							<li className="py-2 px-2 border-b border-gray-100">
								<Link href={"/"} onClick={() => setIsOpen(false)}>
									Beranda
								</Link>
							</li>

							{/* Profile Menu with submenu */}
							<li className="py-2 px-2 border-b border-gray-100">
								<div
									className="flex items-center justify-between cursor-pointer"
									onClick={() => toggleMobileSubmenu("profile")}>
									<span>Profile</span>
									<span className="text-primary">
										{mobileMenuOpen.profile ? (
											<IoIosArrowUp size={18} />
										) : (
											<IoIosArrowDown size={18} />
										)}
									</span>
								</div>
								{mobileMenuOpen.profile && (
									<ul className="pl-4 mt-2 space-y-2">
										<li className="py-1">
											<Link href={"/profil"} onClick={() => setIsOpen(false)}>
												Profil
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/struktur-organisasi"}
												onClick={() => setIsOpen(false)}>
												Struktur Organisasi
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/visi-misi"}
												onClick={() => setIsOpen(false)}>
												Visi & Misi
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/jaringan-kantor"}
												onClick={() => setIsOpen(false)}>
												Jaringan Kantor
											</Link>
										</li>
									</ul>
								)}
							</li>

							{/* Produk & Layanan Menu */}
							<li className="py-2 px-2 border-b border-gray-100">
								<div
									className="flex items-center justify-between cursor-pointer"
									onClick={() => toggleMobileSubmenu("products")}>
									<span>Produk & Layanan</span>
									<span className="text-primary">
										{mobileMenuOpen.products ? (
											<IoIosArrowUp size={18} />
										) : (
											<IoIosArrowDown size={18} />
										)}
									</span>
								</div>
								{mobileMenuOpen.products && (
									<ul className="pl-4 mt-2 space-y-2">
										<li className="py-1">
											<Link href={"/tabungan"} onClick={() => setIsOpen(false)}>
												<div className="flex items-center">
													<TbPigMoney size={16} className="text-primary mr-2" />
													Tabungan
												</div>
											</Link>
										</li>
										<li className="py-1">
											<Link href={"/deposito"} onClick={() => setIsOpen(false)}>
												<div className="flex items-center">
													<PiHandDepositBold
														size={16}
														className="text-primary mr-2"
													/>
													Deposito
												</div>
											</Link>
										</li>
										<li className="py-1">
											<Link href={"/kredit"} onClick={() => setIsOpen(false)}>
												<div className="flex items-center">
													<TbCreditCardPay
														size={16}
														className="text-primary mr-2"
													/>
													Kredit
												</div>
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/bw-digital"}
												onClick={() => setIsOpen(false)}>
												<div className="flex items-center">
													<MdInstallMobile
														size={16}
														className="text-primary mr-2"
													/>
													BW Digital
												</div>
											</Link>
										</li>
									</ul>
								)}
							</li>

							<li className="py-2 px-2 border-b border-gray-100">
								<Link href={"#"} onClick={() => setIsOpen(false)}>
									Informasi
								</Link>
							</li>

							{/* Publikasi Menu */}
							<li className="py-2 px-2 border-b border-gray-100">
								<div
									className="flex items-center justify-between cursor-pointer"
									onClick={() => toggleMobileSubmenu("publications")}>
									<span>Publikasi</span>
									<span className="text-primary">
										{mobileMenuOpen.publications ? (
											<IoIosArrowUp size={18} />
										) : (
											<IoIosArrowDown size={18} />
										)}
									</span>
								</div>
								{mobileMenuOpen.publications && (
									<ul className="pl-4 mt-2 space-y-2">
										<li className="py-1">
											<Link
												href={"/laporan-tahunan"}
												onClick={() => setIsOpen(false)}>
												Laporan Tahunan
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/laporan-tatakelola"}
												onClick={() => setIsOpen(false)}>
												Laporan Tata Kelola
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/laporan-publikasi"}
												onClick={() => setIsOpen(false)}>
												Laporan Publikasi
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/laporan-triwulan"}
												onClick={() => setIsOpen(false)}>
												Laporan Triwulan
											</Link>
										</li>
										<li className="py-1">
											<Link
												href={"/laporan-keberlanjutan"}
												onClick={() => setIsOpen(false)}>
												Laporan Keberlanjutan
											</Link>
										</li>
									</ul>
								)}
							</li>

							<li className="py-2 px-2 border-b border-gray-100">
								<Link href={"lelang"} onClick={() => setIsOpen(false)}>
									Lelang
								</Link>
							</li>

							<li className="py-2 px-2 border-b border-gray-100">
								<Link href={"karir"} onClick={() => setIsOpen(false)}>
									Karir
								</Link>
							</li>

							<li className="py-2 px-2 border-b border-gray-100">
								<Link
									href={"lapor-pelanggaran"}
									onClick={() => setIsOpen(false)}>
									Lapor Pelanggaran
								</Link>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
