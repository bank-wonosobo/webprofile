import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdInstallMobile, MdOutlineLocationOn } from "react-icons/md";
import { PiHandDepositBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbCreditCardPay, TbMenu4, TbPigMoney } from "react-icons/tb";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-3 w-full ${
        isFixed ? "shadow-lg bg-opacity-100" : "bg-opacity-100"
      } fixed z-[100] bg-white  transition-all  duration-1000 ${
        isOpen ? "fixed min-h-screen bg-primary" : ""
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between ${
          isOpen ? "" : ""
        }  `}
      >
        {/* logo */}
        <Link href="/" className="p-3">
          <img src="/static/logo-bw.svg" alt="" className="w-40" />
        </Link>
        {/* menu */}
        <ul
          className={`hidden text-sm lg:flex min-w-[430px] flex-row items-center justify-between text-primary font-semibold ${
            isOpen ? "" : "lg:flex"
          }`}
        >
          <li>
            <Link href={"#"} className="p-3 rounded-lg hover:bg-secondary/20">
              Beranda
            </Link>
          </li>
          <li className="flex rounded-lg justify-start items-center hover:bg-secondary/20">
            <Dropdown name="Profile">
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Sejarah
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Komisaris
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Direksi
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Pemegang Saham
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Visi Misi
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Struktur Organisasi
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Jaringa Kantor
              </li>
            </Dropdown>
          </li>
          <li className="flex rounded-lg justify-start items-center hover:bg-secondary/20">
            <Dropdown name="Produk & Layanan">
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
                <div className="flex gap-2 font-semibold">
                  <TbPigMoney size={18} className="text-primary" />
                  Tabungan
                </div>
                <p className="text-xs font-light mt-2">
                  Nabung Lebih Mudah dan Aman
                </p>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
                <div className="flex gap-2 font-semibold">
                  <PiHandDepositBold size={18} className="text-primary" />
                  Deposito
                </div>
                <p className="text-xs font-light mt-2">Bunga Tabungan lebih</p>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
                <div className="flex gap-2 font-semibold">
                  <TbCreditCardPay size={18} className="text-primary" />
                  Kredit
                </div>
                <p className="text-xs font-light mt-2">
                  Pinjaman Dengan Bunga Rendah
                </p>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col">
                <div className="flex gap-2 font-semibold">
                  <MdInstallMobile size={18} className="text-primary" />
                  BW Digital
                </div>
                <p className="text-xs font-light mt-2">
                  Layanan Digital Bank Wonosobo
                </p>
              </li>
            </Dropdown>
          </li>
          <li>
            <Link href={"#"} className="p-3 rounded-lg hover:bg-secondary/20">
              Informasi
            </Link>
          </li>
          <li className="flex p-3 rounded-lg justify-start items-center hover:bg-secondary/20">
            <Link href={"#"} className="rounded-lg ">
              Publikasi
            </Link>
            <RiArrowDropDownLine size={23} />
          </li>
          <li>
            <Link href={"#"} className="p-3 rounded-lg hover:bg-secondary/20">
              Karir
            </Link>
          </li>
          <li>
            <Link href={"#"} className="py-3">
              <MdOutlineLocationOn
                color="wihte"
                size={30}
                className="animate-bounce ml-10"
              />
            </Link>
          </li>
        </ul>
        <div className="lg:hidden p-4 text-primary">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 size={30} /> : <TbMenu4 size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
