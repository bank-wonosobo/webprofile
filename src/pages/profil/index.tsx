import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Profile() {
	return (
		<MainLayout>
			<SectionLayout title="Profil">
				<div className="mx-auto container max-w-4xl px-4 leading-relaxed font-light">
					<ol className="list-[upper-roman]">
						<li className="font-bold ">
							<h1>INFORMASI PERUSAHAAN</h1>
						</li>
						<p className="text-justify">
							PT BPR Bank Wonosobo (Perseroda) berkedudukan di Jalan Ahmad Yani
							No. 160, Wonosobo, JawaTengah. PT BPR Bank Wonosobo (Perseroda)
							merupakan salah satu perusahaan yang bergerak di bidang jasa
							keuangan dengan cakupan operasional di Wilayah Kabupaten Wonosobo
							dan sahamnya 100% milik Pemerintah Kabupaten Wonosobo yang
							didirikan pada tahun 1980 berdasarkan Perda no 10 Tahun 1980
							tanggal 9 Agustus 1980 tentang Perusahaan Daerah Bank Pasar
							Kabupaten Daerah Tingkat 2 Wonosobo. Kemudian berdasarkan Surat
							Keputusan Melanjutkan Usaha (SKMU) dari Dirjen Moneter Dalam
							Negeri Nomor Ket-140/MK.11/1984 tanggal 11 April 1984 Perusahaan
							Daerah Bank Pasar Kabupaten Daerah Tingkat II Wonosobo
							diperkenankan kembali melanjutkan usahanya sebagai &quot;Bank
							Pasar&quot;. Pada tanggal 19 Januari 1998 berdasarkan Keputusan
							Menteri Keuangan Republik Indonesia Nomor: KEP- 004/KM.17/1998 dan
							Surat bank Indonesia Nomor 30/447/UBPR/AdR/Rahasia tanggal 07
							Januari 1998 Perusahaan Daerah Bank Pasar Kabupaten Daerah Tingkat
							II Wonosobo mendapat persetujuan berubah nama menjadi Perusahaan
							Daerah Bank Perkreditan Rakyat &quot;Bank Pasar&quot; Kabupaten
							Daerah Tingkat II Wonosobo. Pada tahun 2009 berdasarkan Peraturan
							Daerah Nomor: 20 tahun 2008 dan telah mendapatkan pengesahan Bank
							Indonesia Nomor 112/KEP.PBI/Sm/Ekstern/2009 tanggal 09 Juli 2009,
							PD BPR Bank Pasar Wonosobo berganti nama menjadi &quot;PD BPR Bank
							Wonosobo&quot;. Dan berdasarkan Peraturan Daerah Kabupaten
							Wonosobo Nomor 4 Tahun 2021 tanggal 21 Juli 2021 Tentang
							Perusahaan Perseroan Daerah Bank Perkreditan Rakyat Bank Wonosobo
							dan mendapat pengesahan Menteri Hukum dan Hak Asasi Manusia
							tentang pendirian Badan Hukum Perseroan Terbatas PT BPR BANK
							WONOSOBO (PERSERODA) Nomor AHU 0032819.AH.01.01 TAHUN 2022 tanggal
							22 Mei 2022.
						</p>
						<p className="text-justify">
							Dalam kaitan ini, PT BPR Bank Wonosobo (Perseroda) memiliki fungsi
							dan peran sebagai berikut:
						</p>
						<ol className="list-[lower-alpha] pl-5">
							<li>
								Memberantas lintah darat/pelepas uang yang beroperasi di wilayah
								kerja pemerintah daerah terutama di pasar-pasar;
							</li>
							<li>Menambah pendapatan pemerintah daerah;</li>
							<li>
								Memberikan pinjaman terutama guna menjalankan usaha-usaha dalam
								bidang perdagangan kepada pedagang, pengusaha ekonomi lemah di
								komplek-komplek pasar dan tempat-tempat lain;
							</li>
							<li>
								Memberikan pinjaman kepada PNS, TNI/Polri Perangkat Desa dan
								Masyarakat Umum;
							</li>
							<li>
								Menyalurkan potensi ekonomi masyarakat dengan menerima simpanan
								uang.
							</li>
						</ol>
						<p className="text-justify">
							Adapun tujuan PT BPR Bank Wonosobo (Perseroda) antara lain
							ditetapkan sebagai berikut:
						</p>
						<ol className="list-[lower-alpha] pl-5 text-justify">
							<li>
								Menghimpun dana dari masyarakat dalam bentuk deposito berjangka,
								tabungan, dan atau bentuk lainnya yang dipersamakan dengan itu;
							</li>
							<li>
								Menyalurkan kredit dan memberikan pembinaan terhadap masyarakat;
							</li>
							<li>
								Melakukan kerjasama antar perusahaan Daerah Bank Perkreditan
								Rakyat
							</li>
						</ol>
						<p className="text-justify">
							Adapun penjelasan-penjelasan lain tentang ruang lingkup PT BPR
							Bank Wonosobo (Perseroda) antara lain:
						</p>
						<ol className="list-[lower-alpha] pl-5">
							<li>
								Naiknya NPL disebabkan karena kondisi perekonomian yang belum
								stabil yang berdampak pada semua sektor terutama sektor UMKM,
								pariwisata dan sektor lainnya. Saat ini PT BPR Bank Wonosobo
								(Perseroda) mulai menyesuaikan kolektibilitas sesuai dengan POJK
								Nomor 1/POJK.03/2024 Tentang Kualitas Aset Bank Perekonomian
								Rakyat secara bertahap. dengan Lembaga Perbankan atau Keuangan
								lainnya 11
							</li>
							<li>
								Pemegang saham, direksi atau anggota komisaris tidak mempunyai
								keterkaitan atau hubungan darah satu sama lain.
							</li>
							<li>
								Tidak ada perubahan penting yang terjadi di PT BPR Bank Wonosobo
								(Perseroda) yang mempengaruhi kegiatan operasional pada tahun
								berjalan.
							</li>
						</ol>
						<li className="font-bold mt-4">
							KEPEMILIKAN DAN PERMODALAN PERUSAHAAN
						</li>
						<p className="text-justify">
							Kepemilikan PT BPR Bank Wonosobo (Perseroda) sebesar 100% adalah
							milik Pemerintah Kabupaten Wonosobo. Sesuai dengan Peraturan
							Daerah Kabupaten Wonosobo Nomor 4 Tahun 2021 tanggal 21 Juli 2021
							Tentang Perusahaan Perseroan Daerah Bank Perkreditan Rakyat Bank
							Wonosobo dan mendapat pengesahan Menteri Hukum dan Hak Asasi
							Manusia tentang pendirian Badan Hukum Perseroan Terbatas PT BPR
							BANK WONOSOBO (PERSERODA) Nomor AHU- 0032819.AH.01.01 TAHUN 2022
							tanggal 22 Mei 2022. Dengan modal dasar Rp. 100.000.000.000,-
							hingga 31 Desember 2022 total modal disetor sebesar
							Rp25.000.000.000, dengan rincian setoran modal sebagai 12 berikut:
						</p>
						<ol className="list-disc pl-5">
							<li>
								Tahun 2009 disetorkan Rp1.000.000.000,- modal disetor menjadi
								Rp5.069.580.545,67.
							</li>
							<li>
								4 Januari 2013 disetorkan Rp1.000.000.000,- modal disetor
								menjadi Rp6.069.580.545,67.
							</li>
							<li>
								11 Desember 2013 disetorkan Rp6.000.000.000,- modal disetor
								menjadi Rp12.069.580.545,67.
							</li>
							<li>
								1 September 2014 disetorkan Rp3.000.000.000,- modal disetor
								menjadi Rp15.069.580.545,67.
							</li>
							<li>
								18 Desember 2015 disetorkan Rp5.750.000.000,- modal disetor
								menjadi Rp20.819.580.545,-.
							</li>
							<li>
								18 Desember 2015 disetorkan Rp5.750.000.000,- modal disetor
								menjadi Rp20.819.580.545,-.
							</li>
							<li>
								18 Desember 2015 disetorkan Rp5.750.000.000,- modal disetor
								menjadi Rp20.819.580.545,-.
							</li>
							<li>
								13 Mei 2016 disetorkan Rp2.750.000.000,- modal disetor menjadi
								Rp23.569.580.545,-.
							</li>
							<li>
								16 April 2019 disetorkan Rp1.000.000.000,- modal disetor menjadi
								Rp24.569.580.545,-.
							</li>
							<li>
								16 Maret 2021 disetorkan Rp430.419.454,- modal disetor menjadi
								Rp25.000.000.000,-.
							</li>
						</ol>
						<li className="font-bold mt-4">
							<h1>PENGURUS PERUSAHAAN</h1>
						</li>
						<p className="text-justify">
							Susunan pengurus PT BPR Bank Wonosobo (Perseroda) yang terdiri
							dari Komisaris Utama dan Direktur Operasional pada periode 31
							Desember 2024 adalah sebagaimana disajikan pada tabel 1 di bawah
							ini. Adapun profil pengurus perusahaan dan pejabat eksekutif PT
							BPR Bank Wonosobo (Perseroda) adalah sebagai berikut:
						</p>
						<img
							src="/susunan-pengurus.png"
							alt="Susunan Pengurus PT BPR Bank Wonosobo (Perseroda) per 31 Desember 2024"
							className="my-4 rounded-xl"
						/>
						<div className="flex flex-col item lg:items-center lg:flex-row gap-4">
							<img src="/one.png" alt="" className="w-56 mx-auto rounded-xl" />
							<p className="text-justify">
								<span className="font-bold">a. Komisaris</span> <br />
								Komisaris Utama : Drs. One Andang Wardoyo, MSI 25 September
								1968. Menyelesaikan pendidikan di Universitas Gajah Mada jurusan
								Ilmu Politik 13 Mulai menjabat Ketua Dewan Pengawas sejak tahun
								2021 berdasarkan Surat Keputusan Bupati Kabupaten Wonosobo Nomor
								440/175/2021 tanggal 25 maret 2021, bersama keluarga saat ini
								tinggal di Bomerto Wonosobo.
							</p>
						</div>
						<div className="flex flex-col item lg:items-center lg:flex-row gap-4 my-4">
							<img
								src="/galih.jpg"
								alt=""
								className="w-56 mx-auto rounded-xl"
							/>
							<p className="text-justify">
								<span className="font-bold">b. Direksi</span> <br />
								Direktur Operasional : Galih Pambajeng, S.Ak. Lahir di Purworejo
								pada tanggal 20 April 1987. Menyelesaikan pendidikan Diploma III
								Akuntansi UGM Yogyakarta pada tahun 2008 dan menyelesaikan
								Pendidikan Sarjana Akuntansi STIE TOTALWIN Semarang. Menjabat
								sebagai Direksi mulai 25 Januari 2024, bersama dengan keluarga
								saat ini tinggal di Perumahan Bumi Dieng Indah.
							</p>
						</div>
						<p className="font-bold mt-4">c. Pejabat Eksekutif</p>
						<ol className="list-decimal pl-9">
							<li className="font-bold">
								Pejabat Divisi Dana Edukasi dan Literasi : SUTOPO, SE
							</li>
							<p className="text-justify">
								Lahir di Wonosobo pada tanggal 8-6-1971. Menyelesaikan
								pendidikan Sarjana Ekonomi di UNSIQ di Wonosobo pada tahun 2008.
								Mulai menjabat Kepala Divisi Dana Edukasi dan Literasi PT BPR
								Bank Wonosobo (Perseroda) sejak 13 September 2024 berdasarkan SK
								Direksi No 056/SK/DIR/600557/IX/2024. Bersama keluarganya, saat
								ini tinggal di Sumberan Wonosobo
							</p>
							<li className="font-bold">
								Kepala Divisi Kredit : Rifqy Dewangga, SH.
							</li>
							<p className="text-justify">
								Lahir di Wonosobo pada tanggal 11 November 1988. Menyelesaikan
								pendidikan Sarjana Hukum UNSOED Purwokerto pada tahun 2014.
								Mulai menjabat Pejabat Kepala Divisi Kredit PT BPR Bank Wonosobo
								(Perseroda) sejak 13 September 2024 berdasarkan SK Direksi No
								056/SK/DIR/600557/IX/2024. Bersama keluarganya saat ini tinggal
								di Segug Kalikajar Wonosobo.
							</p>
							<li className="font-bold">
								Pejabat Eksekutif Kepatuhan dan Manajemen Risiko APU PPT &
								PPPSPM: Dwi Wijayanti, S.E.{" "}
							</li>
							<p className="text-justify">
								Lahir di Wonosobo pada tanggal 5 September 1985 Menyelesaikan
								pendidikan Sarjana Ekonomi di Jurusan Akuntansi Universitas
								Teknologi Yogyakarta. Mulai menjabat Pejabat Eksekutif Kepatuhan
								dan Manajemen Risiko APU PPT & PPPSPM PT BPR Bank Wonosobo
								(Perseroda) sejak 13 September 2024 berdasarkan SK Direksi No
								056/SK/DIR/600557/IX/2024. Bersama keluarganya saat ini tinggal
								di Betengsari Kertek Wonosobo.
							</p>
							<li className="font-bold">
								Pejabat Eksekutif Audit Internal : Nani Tri Astuti, SE.
							</li>
							<p className="text-justify">
								Lahir di Wonosobo pada tanggal 6 November 1978. Menyelesaikan
								pendidikan Sarjana Ekonomi di Jurusan Akuntansi UPN Veteran
								Yogyakarta. Mulai menjabat Pejabat Eksekutif Audit Internal PT
								BPR Bank Wonosobo (Perseroda) sejak sejak 13 September 2024
								berdasarkan SK Direksi No 056/SK/DIR/600557/IX/2024. Bersama
								keluarganya saat ini tinggal di Selomerto Wonosobo.
							</p>
							<li className="font-bold">
								Kepala Divisi Operasional : Andi Purnomo, SE
							</li>
							<p className="text-justify">
								Lahir di Wonosobo pada tanggal 27 November 1987. Menyelesaikan
								pendidikan Sarjana Ekonomi di Jurusan Akuntansi UNSIQ Jawa
								Tengah di Wonosobo. Mulai menjabat Kepala Divisi Operasional PT
								BPR Bank Wonosobo (Perseroda) sejak 13 Februari 2024 berdasarkan
								SK Direksi No 015/SK/DIR/600557/II/2024. Bersama keluarganya
								saat ini tinggal di Mirombo Permai Rojoimo Wonosobo
							</p>
						</ol>
					</ol>
					<div className="text-right mt-6 border-t border-gray-200 pt-6">
						<Link
							href="/struktur-organisasi"
							className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 gap-1">
							Struktur Organisasi <RightOutlined />
						</Link>
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
