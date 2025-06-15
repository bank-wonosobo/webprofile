import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 p-4 py-8">
			<div className="container mx-auto">
				<img src="/static/logo-bw-white.svg" alt="" className="w-40" />
			</div>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
				<div>
					<h3 className="text-white font-semibold mb-2">Kantor Pusat</h3>
					<p>Kantor Pusat Bank Wonosobo</p>
					<p>Jl. A. Yani No.rt 03 160</p>
					<p>Wonosobo 56311</p>
					<Link
						href="jaringan-kantor"
						className="text-blue-400 hover:underline">
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
							className="text-blue-400 hover:underline">
							admin@bankwonosobo.co.id
						</a>
					</p>
					<p>&#x1F4F2; (0286) 321293</p>
				</div>

				<div>
					<h3 className="text-white font-semibold mb-2">Media Sosial</h3>
					<p>&#xf09a; GoodLife BankWonosobo</p>
					<p>&#xf167; Solusi BankWonosobo</p>
					<p>&#xf16d; @goodlifeBankWonosobo</p>
					<p>&#xf099; @BankBankWonosobo</p>
					<a href="#" className="text-blue-400 hover:underline">
						Lihat Semua Media Sosial
					</a>
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
						</a>
						and
						<a href="#" className="text-blue-400 hover:underline">
							Terms of Service
						</a>
						apply.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
