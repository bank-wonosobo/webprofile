import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function VisiMisi() {
	return (
		<MainLayout>
			<SectionLayout title="Visi & Misi">
				<div className="flex justify-center items-center flex-col">
					<div className="mb-8 max-w-4xl ">
						<h2 className="text-2xl font-bold  mb-2 text-center text-secondary">
							Visi PT BPR BANK WONOSOBO (PERSERODA)
						</h2>
						<p className="text-lg font-semibold text-primary italic text-center">
							“Menjadi BPR Terbaik yang Membanggakan”
						</p>
					</div>

					<div className="max-w-4xl font-light">
						<h2 className="text-2xl font-bold  mb-4 text-center text-secondary">
							Misi - misi
						</h2>
						<ol className="list-decimal pl-5 space-y-4 text-primary">
							<li>
								<span className="font-medium">
									Mencapai kinerja terbaik di antara BPR.
								</span>
								<ul className="list-[lower-alpha] pl-6 mt-1 space-y-1">
									<li>Meningkatkan tingkat kesehatan.</li>
									<li>Mengurangi risiko-risiko perbankan.</li>
								</ul>
							</li>

							<li>
								<span className="font-medium">
									Meningkatkan pertumbuhan deviden.
								</span>
								<ul className="list-[lower-alpha] pl-6 mt-1 space-y-1">
									<li>Meningkatkan kontribusi terhadap pemerintah daerah.</li>
									<li>
										Memberikan Deviden yang tertinggi di antara BUMD di
										Kabupaten Wonosobo.
									</li>
									<li>Meningkatkan peran dalam perekonomian daerah.</li>
								</ul>
							</li>

							<li>
								<span className="font-medium">
									Meningkatkan reputasi dan menjadikan PT BPR BANK WONOSOBO
									(PERSERODA) sebagai pilihan utama masyarakat Wonosobo dan
									sekitarnya.
								</span>
								<ul className="list-[lower-alpha] pl-6 mt-1 space-y-1">
									<li>Meningkatkan profesionalisme dan Sumber Daya Manusia.</li>
									<li>
										Meningkatkan pelayanan yang efektif, efisien dan tanggap.
									</li>
									<li>
										Meningkatkan produk layanan yang lengkap dengan dukungan
										teknologi informasi yang unggul dan terjangkau segala
										lapisan masyarakat.
									</li>
									<li>
										Mencapai Image Bank Wonosobo sebagai “Bange wong Wonosobo”.
									</li>
								</ul>
							</li>
						</ol>
						<div className="flex justify-between mt-6 text-base text-right border-t border-gray-200 pt-6">
							<Link
								href="/struktur-organisasi"
								className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
								<LeftOutlined />
								Struktur Organisasi
							</Link>
							<Link
								href="/jaringan-kantor"
								className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300">
								Jaringan Kantor
								<RightOutlined />
							</Link>
						</div>
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
