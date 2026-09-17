/* eslint-disable @next/next/no-img-element */
"use client";

import getLaporanByType from "@/data/tipe-laporan";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdInstallMobile } from "react-icons/md";
import { PiHandDepositBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { TbCreditCardPay, TbMenu4, TbPigMoney } from "react-icons/tb";
import Dropdown from "./Dropdown";

interface LaporanTypeItem {
  id: number;
  name: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [publikasi, setPublikasi] = useState<LaporanTypeItem[]>([]);
  // const [loading, setLoading] = useState(true);

  type MobileMenuKeys = "profile" | "products" | "publications" | "pengaduan" | "ppid_laporan" | "ppid_daftar_informasi";

  const [mobileMenuOpen, setMobileMenuOpen] = useState({
    profile: false,
    products: false,
    publications: false,
    pengaduan: false,
    ppid_laporan: false,
    ppid_daftar_informasi: false,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLaporanByType();
        setPublikasi(response.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
        isFixed ? "shadow-sm border-b backdrop-blur-sm" : ""
      } ${isOpen ? "h-screen overflow-y-auto" : ""}`}
    >
      <nav className=" py-2 w-full container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="p-3 mx-1">
            <img src="/static/logo-bw.svg" alt="" className="w-40" />
          </Link>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden p-3 mx-1 text-primary">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross2 size={30} /> : <TbMenu4 size={30} />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden h-full relative text-sm lg:flex min-w-[430px] flex-row items-center justify-between text-primary font-semibold">
            <Link href={"/"} className="">
              <li className="hover:border-b-[3px] py-4 border-b-secondary px-3">
                Beranda
              </li>
            </Link>
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
            <Link href={"/informasi"}>
              <li className="px-3 hover:border-b-[3px] border-b-secondary py-4">
                Informasi
              </li>
            </Link>
            <li className="flex justify-between hover:border-b-[3px] border-b-secondary items-center relative">
              <Dropdown name="PPID">
                {/* Profile Sub-dropdown */}
                <li className="group relative px-4 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                  Profile
                  <IoIosArrowBack size={16} />
                  <div className="absolute hidden group-hover:block top-0 right-full min-w-48 bg-white border border-gray-200 rounded-md shadow-md mr-1">
                    <ul className="py-2 text-gray-700">
                      <Link href={"/profil"}>
                        <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                          Profil
                        </li>
                      </Link>
                      <Link href={"/struktur-organisasi"}>
                        <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                          Struktur Organisasi
                        </li>
                      </Link>
                      <Link href={"/visi-misi"}>
                        <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                          Visi & Misi
                        </li>
                      </Link>
                      <Link href={"/jaringan-kantor"}>
                        <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                          Jaringan Kantor
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>

                {/* Laporan Sub-dropdown */}
                <li className="group relative px-4 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                  Laporan
                  <IoIosArrowBack size={16} />
                  <div className="absolute hidden group-hover:block top-0 right-full min-w-48 bg-white border border-gray-200 rounded-md shadow-md mr-1">
                    <ul className="py-2 text-gray-700">
                      {publikasi.map((item) => (
                        <Link
                          key={item.id}
                          href={`/publikasi/${item.id}/${item.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                            {item.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Daftar Informasi Sub-dropdown */}
                <li className="group relative px-4 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                  Daftar Informasi
                  <IoIosArrowBack size={16} />
                  <div className="absolute hidden group-hover:block top-0 right-full min-w-56 bg-white border border-gray-200 rounded-md shadow-md mr-1">
                    <ul className="py-2 text-gray-700">
                      <Link href={"/daftar-informasi-publik"}>
                        <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                          Daftar Informasi Publik
                        </li>
                      </Link>
                      <Link href={"/daftar-informasi-dikecualikan"}>
                        <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left">
                          Daftar Informasi yang Dikecualikan
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>

                {/* Regulasi Informasi PPID */}
                <Link href={"/regulasi-informasi-ppid"}>
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Regulasi Informasi PPID
                  </li>
                </Link>
              </Dropdown>
            </li>
             <Link href={"/lelang"}>
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Lelang
                  </li>
              </Link>
            <Link href={"/karir"}>
              <li className="px-3 hover:border-b-[3px] border-b-secondary py-4">
                Karir
              </li>
            </Link>
            <li className="flex justify-between hover:border-b-[3px] border-b-secondary items-center relative">
              <Dropdown name="Pengaduan">
                <Link href={"/pengaduan-nasabah"}>
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Pengaduan Nasabah
                  </li>
                </Link>
                <Link href={"/lapor-pelanggaran"}>
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Whistle Blowing System
                  </li>
                </Link>
              </Dropdown>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden w-full mt-4 border-t pt-4">
            <ul className="flex flex-col space-y-3 text-primary font-medium">
              <li className="py-2 px-4 border-b border-gray-100">
                <Link href={"/"} onClick={() => setIsOpen(false)}>
                  Beranda
                </Link>
              </li>



              {/* Produk & Layanan Menu */}
              <li className="py-2 px-4 border-b border-gray-100">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileSubmenu("products")}
                >
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
                        onClick={() => setIsOpen(false)}
                      >
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

              <li className="py-2 px-4 border-b border-gray-100">
                <Link href={"/informasi"} onClick={() => setIsOpen(false)}>
                  Informasi
                </Link>
              </li>

              {/* Publikasi / PPID Menu */}
              <li className="py-2 px-4 border-b border-gray-100">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileSubmenu("publications")}
                >
                  <span>PPID</span>
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
                    {/* Profile */}
                    <li className="py-1">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleMobileSubmenu("profile")}
                      >
                        <span>Profile</span>
                        <span className="text-primary">
                          {mobileMenuOpen.profile ? (
                            <IoIosArrowUp size={16} />
                          ) : (
                            <IoIosArrowDown size={16} />
                          )}
                        </span>
                      </div>
                      {mobileMenuOpen.profile && (
                        <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                          <li className="py-1">
                            <Link href={"/profil"} onClick={() => setIsOpen(false)}>
                              Profil
                            </Link>
                          </li>
                          <li className="py-1">
                            <Link href={"/struktur-organisasi"} onClick={() => setIsOpen(false)}>
                              Struktur Organisasi
                            </Link>
                          </li>
                          <li className="py-1">
                            <Link href={"/visi-misi"} onClick={() => setIsOpen(false)}>
                              Visi & Misi
                            </Link>
                          </li>
                          <li className="py-1">
                            <Link href={"/jaringan-kantor"} onClick={() => setIsOpen(false)}>
                              Jaringan Kantor
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Laporan */}
                    <li className="py-1">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleMobileSubmenu("ppid_laporan")}
                      >
                        <span>Laporan</span>
                        <span className="text-primary">
                          {mobileMenuOpen.ppid_laporan ? (
                            <IoIosArrowUp size={16} />
                          ) : (
                            <IoIosArrowDown size={16} />
                          )}
                        </span>
                      </div>
                      {mobileMenuOpen.ppid_laporan && (
                        <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                          {publikasi.map((item) => (
                            <li key={item.id} className="py-1">
                              <Link
                                href={`/publikasi/${item.id}/${item.name
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    {/* Daftar Informasi */}
                    <li className="py-1">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleMobileSubmenu("ppid_daftar_informasi")}
                      >
                        <span>Daftar Informasi</span>
                        <span className="text-primary">
                          {mobileMenuOpen.ppid_daftar_informasi ? (
                            <IoIosArrowUp size={16} />
                          ) : (
                            <IoIosArrowDown size={16} />
                          )}
                        </span>
                      </div>
                      {mobileMenuOpen.ppid_daftar_informasi && (
                        <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                          <li className="py-1">
                            <Link href={"/daftar-informasi-publik"} onClick={() => setIsOpen(false)}>
                              Daftar Informasi Publik
                            </Link>
                          </li>
                          <li className="py-1">
                            <Link href={"/daftar-informasi-dikecualikan"} onClick={() => setIsOpen(false)}>
                              Daftar Informasi Dikecualikan
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Regulasi Informasi PPID */}
                    <li className="py-1">
                      <Link
                        href={"/regulasi-informasi-ppid"}
                        onClick={() => setIsOpen(false)}
                      >
                        Regulasi Informasi PPID
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-2 px-4 border-b border-gray-100">
                <Link href={"/karir"} onClick={() => setIsOpen(false)}>
                  Karir
                </Link>
              </li>

              {/* Pengaduan Menu */}
              <li className="py-2 px-4 border-b border-gray-100">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileSubmenu("pengaduan")}
                >
                  <span>Pengaduan</span>
                  <span className="text-primary">
                    {mobileMenuOpen.pengaduan ? (
                      <IoIosArrowUp size={18} />
                    ) : (
                      <IoIosArrowDown size={18} />
                    )}
                  </span>
                </div>
                {mobileMenuOpen.pengaduan && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="py-1">
                      <Link
                        href={"/pengaduan-nasabah"}
                        onClick={() => setIsOpen(false)}
                      >
                        Pengaduan Nasabah
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href={"/lapor-pelanggaran"}
                        onClick={() => setIsOpen(false)}
                      >
                        Whistle Blowing System
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
