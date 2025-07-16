import React from "react";

export default function BwzDigitalPage() {
	return (
		<div className="min-h-screen text-[#333] font-sans">
			<header className=" text-center">
				<div className="flex flex-col items-center">
					<h1 className="text-3xl font-bold mb-4">Kebijakan Privasi</h1>
					<p>BW Digital – PT BPR Bank Wonosobo (Perseroda)</p>
					<p className="text-sm">Terakhir diperbarui: 15 Mei 2025</p>
					<br />
				</div>
			</header>

			<main className="max-w-4xl mx-auto bg-white mb-10">
				{[
					{
						title: "1. Pendahuluan",
						content: `Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menyimpan, menggunakan, dan melindungi data pribadi Anda saat menggunakan aplikasi BW Digital milik PT BPR Bank Wonosobo (Perseroda). Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan di bawah ini.`,
					},
					{
						title: "2. Informasi yang Kami Kumpulkan",
						content: (
							<ul className="list-disc pl-5">
								<li>
									<strong>Informasi Identitas:</strong> Nama lengkap, nomor
									identitas (KTP/NIK), tempat dan tanggal lahir, jenis kelamin.
								</li>
								<li>
									<strong>Informasi Kontak:</strong> Nomor telepon, alamat
									rumah, alamat email.
								</li>
								<li>
									<strong>Data Keuangan:</strong> Nomor rekening, histori
									transaksi, jenis transaksi, saldo akun.
								</li>
								<li>
									<strong>Data Perangkat:</strong> Alamat IP, tipe perangkat,
									sistem operasi, ID perangkat.
								</li>
								<li>
									<strong>Informasi Biometrik:</strong> Sidik jari, pengenalan
									wajah (jika Anda memberikan persetujuan untuk fitur
									autentikasi).
								</li>
							</ul>
						),
					},
					{
						title: "3. Penggunaan Informasi",
						content: (
							<>
								<p>Informasi yang kami kumpulkan digunakan untuk:</p>
								<ul className="list-disc pl-5">
									<li>
										Memverifikasi identitas pengguna saat registrasi dan login.
									</li>
									<li>Mengelola akun perbankan dan menjalankan transaksi.</li>
									<li>Meningkatkan keamanan akun pengguna.</li>
									<li>
										Mengembangkan, mengelola, dan menyempurnakan layanan
										aplikasi BW Digital.
									</li>
									<li>Memenuhi kewajiban hukum dan regulasi yang berlaku.</li>
								</ul>
							</>
						),
					},
					{
						title: "4. Dasar Hukum Pemrosesan",
						content: (
							<>
								<p>Kami memproses data pribadi Anda berdasarkan:</p>
								<ul className="list-disc pl-5">
									<li>
										Persetujuan eksplisit yang Anda berikan saat menggunakan
										aplikasi BW Digital.
									</li>
									<li>
										Kewajiban hukum sesuai regulasi perbankan dan UU
										Perlindungan Data Pribadi di Indonesia.
									</li>
									<li>
										Kepentingan sah Bank untuk menjaga keamanan dan meningkatkan
										layanan.
									</li>
								</ul>
							</>
						),
					},
					{
						title: "5. Pembagian Informasi kepada Pihak Ketiga",
						content: (
							<>
								<p>
									Data pribadi Anda tidak akan dibagikan kepada pihak ketiga
									kecuali dalam kondisi berikut:
								</p>
								<ul className="list-disc pl-5">
									<li>
										Kepada penyedia layanan teknologi atau mitra yang membantu
										pengelolaan aplikasi dengan perjanjian kerahasiaan.
									</li>
									<li>
										Kepada otoritas hukum atau regulator jika diwajibkan oleh
										undang-undang.
									</li>
									<li>
										Untuk tujuan audit, keamanan, dan pengendalian risiko
										internal.
									</li>
								</ul>
							</>
						),
					},
					{
						title: "6. Perlindungan Data",
						content: (
							<>
								<p>
									Kami menerapkan langkah-langkah teknis dan administratif untuk
									melindungi data Anda, termasuk:
								</p>
								<ul className="list-disc pl-5">
									<li>Enkripsi data saat transmisi dan penyimpanan.</li>
									<li>Firewall dan sistem deteksi intrusi.</li>
									<li>Pelatihan keamanan siber bagi karyawan kami.</li>
								</ul>
							</>
						),
					},
					{
						title: "7. Hak Anda sebagai Pengguna",
						content: (
							<>
								<p>Anda memiliki hak-hak berikut terkait data pribadi Anda:</p>
								<ul className="list-disc pl-5">
									<li>
										Hak untuk mengakses dan meminta salinan data pribadi Anda.
									</li>
									<li>Hak untuk memperbaiki informasi yang tidak akurat.</li>
									<li>
										Hak untuk menarik persetujuan atas penggunaan data (dengan
										konsekuensi tertentu).
									</li>
									<li>
										Hak untuk menghapus akun dan data pribadi sesuai dengan
										ketentuan hukum yang berlaku.
									</li>
								</ul>
							</>
						),
					},
					{
						title: "8. Penyimpanan dan Retensi Data",
						content:
							"Data pribadi Anda akan disimpan selama akun Anda aktif atau selama dibutuhkan untuk tujuan hukum dan operasional, termasuk keperluan audit dan pelaporan.",
					},
					{
						title: "9. Kebijakan Anak-Anak",
						content:
							"BW Digital tidak ditujukan untuk individu di bawah usia 17 tahun. Kami tidak dengan sengaja mengumpulkan data dari anak-anak tanpa izin orang tua/wali.",
					},
					{
						title: "10. Cookie dan Teknologi Pelacak",
						content: (
							<>
								<p>
									Aplikasi BW Digital dapat menggunakan cookie atau teknologi
									serupa untuk:
								</p>
								<ul className="list-disc pl-5">
									<li>Meningkatkan performa aplikasi.</li>
									<li>Mengidentifikasi dan menganalisis aktivitas pengguna.</li>
									<li>Menyesuaikan pengalaman layanan.</li>
								</ul>
								<p>
									Anda dapat mengatur ulang izin cookie melalui pengaturan
									perangkat Anda.
								</p>
							</>
						),
					},
					{
						title: "11. Perubahan Kebijakan Privasi",
						content:
							"Kami dapat mengubah Kebijakan Privasi ini dari waktu ke waktu. Setiap pembaruan akan diumumkan melalui aplikasi atau situs web resmi kami. Kami mendorong Anda untuk meninjau halaman ini secara berkala.",
					},
					{
						title: "12. Kontak Kami",
						content: (
							<address className="not-italic leading-7">
								<strong>PT BPR Bank Wonosobo (Perseroda)</strong>
								<br />
								Jl. A. Yani No. 160, Wonosobo, Jawa Tengah 56311
								<br />
								Email:{" "}
								<a
									className="text-blue-600 hover:underline"
									href="mailto:bw.bankwonosobo@gmail.com">
									bw.bankwonosobo@gmail.com
								</a>
								<br />
								Telepon: (0286) 321293
								<br />
								Website:{" "}
								<a
									href="https://bankwonosobo.co.id"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline">
									bankwonosobo.co.id
								</a>
							</address>
						),
					},
				].map((section, index) => (
					<section key={index} className="mb-10">
						<h2 className="text-xl font-semibold text-[#004080] mb-2 border-b-2 border-[#dce3ea] pb-1">
							{section.title}
						</h2>
						{typeof section.content === "string" ? (
							<p>{section.content}</p>
						) : (
							section.content
						)}
					</section>
				))}

				<section className="bg-[#e8f1ff] p-4 border-l-4 border-[#004080] font-bold text-[#004080]">
					<p>
						Dengan menggunakan aplikasi BW Digital, Anda menyatakan telah
						membaca, memahami, dan menyetujui seluruh isi Kebijakan Privasi ini.
					</p>
				</section>
			</main>
		</div>
	);
}
