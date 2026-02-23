import {
  InstagramOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-10">
      <div className="container flex p-4 py-8 gap-x-10 mx-auto mb-2">
        <img
          src="/static/logo-bw-white.svg"
          alt="Logo Bank Wonosobo"
          className="w-40"
        />
        <img
          src="/static/pemkab-wsb.png"
          alt="Logo Bank Wonosobo"
          className="w-10"
        />
      </div>
      <div className="container mx-auto pb-10">
        <p className="text-sm">
          <b>PT BPR Bank Wonosobo (Perseroda)</b> berizin dan diawasi oleh
          Otoritas Jasa Keuangan (OJK)
        </p>
        <p className="text-sm mt-2">
          <b>PT BPR Bank Wonosobo (Perseroda)</b> merupakan peserta penjaminan
          LPS. Maksimum nilai simpanan yang dijamin LPS per Nasabah per Bank
          adalah Rp2 miliar. Untuk mengetahui Tingkat Bunga Penjaminan LPS
          silahkan{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
            href="https://apps.lps.go.id/BankPesertaLPSRate"
          >
            akses disini
          </a>
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-2">Kantor Pusat</h3>
          <p>Kantor Pusat Bank Wonosobo</p>
          <p>Jl. A. Yani No.rt 03 160</p>
          <p>Wonosobo 56311</p>
          <Link
            href="jaringan-kantor"
            className="text-blue-400 hover:underline"
          >
            Lokasi Bank Wonosobo Lainnya
          </Link>
        </div>

        <div className="w-full text-sm">
          <h3 className="text-white font-semibold mb-2">Hubungi Kami</h3>
          <p className="flex items-center gap-3 mb-3">
            <FiPhone />
            Halo Bank Wonosobo (0286) 321293
          </p>
          <p className="flex items-center gap-3 mb-3">
            <FiMail />
            <a
              href="mailto:admin@bankwonosobo.co.id"
              className="text-blue-400 hover:underline"
            >
              admin@bankwonosobo.co.id
            </a>
          </p>
          <p>📱 (0286) 321293</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Media Sosial</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <YoutubeOutlined />
              <a
                href="https://www.youtube.com/@bankwonosobo3617"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                @bankwonosobo3617
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramOutlined />
              <a
                href="https://www.instagram.com/bankwonosobo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                @bankwonosobo
              </a>
            </li>
            <li className="flex items-center gap-2">
              <TikTokOutlined />
              <a
                href="https://www.tiktok.com/@bank.wonosobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                @bank.wonosobo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">
            Dapatkan promo dan penawaran terbaik dari Bank Wonosobo
          </h3>
          <input
            type="email"
            placeholder="Masukkan Email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <button className="w-full bg-blue-600 text-white mt-2 p-2 rounded hover:bg-blue-500">
            Kirim
          </button>
          <p className="text-xs mt-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
