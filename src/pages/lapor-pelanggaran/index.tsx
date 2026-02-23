import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import ModalFormAduan from "@/components/report/ModalFormAduan";
import ModalInputId from "@/components/report/ModalInputId";
import { useState } from "react";
import { Toaster } from "sonner";

// Import Ant Design Icons
import {
	NotificationOutlined,
	SearchOutlined,
	FileTextOutlined,
	LockOutlined,
} from "@ant-design/icons";

export default function LaporPelanggaran() {
	const [open1, setOpen1] = useState<boolean>(false);
	const [open2, setOpen2] = useState<boolean>(false);

	return (
		<>
			<Toaster richColors position="top-right" />
			<MainLayout>
				<SectionLayout title="Lapor Pelanggaran">
					<div className="max-w-4xl mx-auto font-light">
						<div className="flex flex-col md:flex-row gap-2 mb-8 items-center justify-center">
							<button
								className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors mr-3 font-medium"
								onClick={() => setOpen1(true)}>
								<NotificationOutlined /> Buat Aduan
							</button>
							<ModalFormAduan open={open1} onCancel={() => setOpen1(false)} />

							<button
								className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/80 transition-colors mr-3 font-medium"
								onClick={() => setOpen2(true)}>
								<SearchOutlined /> Lacak Progress Aduan
							</button>
							<ModalInputId open={open2} onCancel={() => setOpen2(false)} />
						</div>

						<section className="space-y-6 text-justify leading-relaxed">
							<div>
								<h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
									<NotificationOutlined /> Tentang Lapor Pelanggaran
								</h2>
								<p>
									Lapor Pelanggaran adalah sarana bagi Anda untuk melaporkan
									dugaan pelanggaran atau tindakan tidak etis yang terjadi di
									lingkungan PT BPR BANK WONOSOBO (Perseroda). Sistem ini
									memastikan laporan disampaikan secara aman dan rahasia, baik
									yang telah terjadi maupun yang berpotensi terjadi, tanpa
									keterlibatan pelapor dalam pelanggaran tersebut.
								</p>
							</div>

							<div>
								<h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
									<FileTextOutlined /> Unsur Pengaduan
								</h2>
								<ul className="list-disc pl-5 space-y-1">
									<li>
										<strong>WHAT:</strong> Apa bentuk dugaan pelanggaran atau
										tindak pidana yang terjadi.
									</li>
									<li>
										<strong>WHO:</strong> Siapa saja pihak yang terlibat atau
										bertanggung jawab.
									</li>
									<li>
										<strong>WHERE:</strong> Di mana kejadian tersebut terjadi.
									</li>
									<li>
										<strong>WHEN:</strong> Kapan waktu terjadinya kejadian.
									</li>
									<li>
										<strong>HOW:</strong> Bagaimana cara atau modus tindakan itu
										dilakukan.
									</li>
									<li>
										<strong>EVIDENCE (jika ada):</strong> Bukti awal yang
										mendukung laporan, seperti dokumen, rekaman, atau gambar.
									</li>
								</ul>
							</div>

							<div>
								<h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
									<LockOutlined /> Komitmen & Kerahasiaan
								</h2>
								<p>
									Kami menjamin kerahasiaan identitas Anda sebagai pelapor.
									Informasi yang Anda berikan akan kami jaga dengan sepenuh hati
									dan tidak akan disebarluaskan. PT BPR BANK WONOSOBO
									(Perseroda) menghargai setiap laporan yang masuk dan
									berkomitmen untuk menindaklanjutinya dengan serius dan tepat
									waktu.
								</p>
							</div>
						</section>
					</div>
				</SectionLayout>
			</MainLayout>
		</>
	);
}
