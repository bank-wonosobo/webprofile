import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import ModalFormAduan from "@/components/report/ModalFormAduan";
import ModalInputId from "@/components/report/ModalInputId";
import { Button } from "antd";
import { useState } from "react";

export default function LaporPelanggaran() {
	const [open1, setOpen1] = useState<boolean>(false);
	const [open2, setOpen2] = useState<boolean>(false);

	return (
		<MainLayout>
			<SectionLayout title="Lapor Pelanggaran">
				<div className="">
					<Button type="primary" onClick={() => setOpen1(true)}>
						Buat Aduan
					</Button>
					<ModalFormAduan open={open1} onCancel={() => setOpen1(false)} />
				</div>

				<div className="">
					<Button type="primary" onClick={() => setOpen2(true)}>
						Cari Laporan
					</Button>

					<ModalInputId open={open2} onCancel={() => setOpen2(false)} />
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
