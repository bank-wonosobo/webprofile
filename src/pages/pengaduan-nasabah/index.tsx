import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";

export default function PengaduanNasabah() {
	return (
		<MainLayout>
			<SectionLayout title="Pengaduan Nasabah">
				<div className="max-w-4xl mx-auto font-light space-y-6 text-justify leading-relaxed">
					<h2 className="text-lg font-semibold text-blue-700">
						Tentang Pengaduan Nasabah
					</h2>
					<p>
						PT BPR BANK WONOSOBO (Perseroda) berkomitmen untuk memberikan layanan terbaik kepada seluruh nasabah dan masyarakat. Apabila Anda memiliki keluhan, kritik, atau saran terkait layanan kami, Anda dapat menyampaikannya melalui mekanisme pengaduan resmi kami.
					</p>

					<div>
						<h2 className="text-lg font-semibold text-blue-700 mb-2">
							Tata Cara Penyampaian Pengaduan
						</h2>
						<p className="mb-2">Nasabah dapat menyampaikan pengaduan melalui saluran berikut:</p>
						<ol className="list-decimal pl-5 space-y-2">
							<li>
								<strong>Datang Langsung:</strong> Nasabah dapat mengunjungi Kantor Pusat atau Kantor Cabang PT BPR BANK WONOSOBO terdekat dan menyampaikan pengaduan secara lisan atau tertulis melalui petugas Customer Service kami.
							</li>
							<li>
								<strong>Melalui Telepon:</strong> Menghubungi layanan Call Center resmi atau nomor telepon Kantor Cabang terkait.
							</li>
							<li>
								<strong>Melalui Surat atau Email:</strong> Mengirimkan surat pengaduan resmi ke alamat Kantor Pusat atau melalui email resmi pengaduan bank.
							</li>
							<li>
								<strong>Melalui Website (Whistleblowing System):</strong> Jika berkaitan dengan pelanggaran atau tindakan tidak etis, dapat menggunakan layanan Whistleblowing System yang tersedia di website ini.
							</li>
						</ol>
					</div>

					<div>
						<h2 className="text-lg font-semibold text-blue-700 mb-2">
							Persyaratan Dokumen (Untuk Pengaduan Tertulis)
						</h2>
						<p className="mb-2">Untuk mempercepat proses penyelesaian, pastikan Anda melampirkan:</p>
						<ul className="list-disc pl-5 space-y-1">
							<li>Fotokopi Identitas Diri (KTP/SIM/Paspor) yang masih berlaku.</li>
							<li>Fotokopi Bukti Transaksi atau Buku Tabungan yang terkait dengan pengaduan.</li>
							<li>Dokumen pendukung lainnya yang relevan dengan permasalahan.</li>
						</ul>
					</div>

					<div>
						<h2 className="text-lg font-semibold text-blue-700 mb-2">
							Jangka Waktu Penyelesaian
						</h2>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<strong>Pengaduan Lisan:</strong> Akan diselesaikan maksimal dalam 2 (dua) hari kerja sejak pengaduan diterima.
							</li>
							<li>
								<strong>Pengaduan Tertulis:</strong> Akan diselesaikan selambat-lambatnya 20 (dua puluh) hari kerja, dan dapat diperpanjang maksimal 20 (dua puluh) hari kerja berikutnya jika terdapat kondisi tertentu dengan pemberitahuan tertulis kepada nasabah.
							</li>
						</ul>
					</div>

					<div>
						<h2 className="text-lg font-semibold text-blue-700 mb-2">
							Penyelesaian Sengketa
						</h2>
						<p>
							Apabila nasabah tidak menerima atau tidak sepakat dengan hasil penyelesaian pengaduan yang diberikan oleh pihak bank, maka nasabah dapat melanjutkan penyelesaian sengketa melalui Lembaga Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan (LAPS SJK) atau fasilitas penyelesaian pengaduan yang difasilitasi oleh Otoritas Jasa Keuangan (OJK).
						</p>
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
