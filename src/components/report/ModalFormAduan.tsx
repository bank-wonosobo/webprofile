"use client";

import {
	Modal,
	Form,
	Input,
	Select,
	DatePicker,
	TimePicker,
	Upload,
	Button,
} from "antd";
import {
	UploadOutlined,
	NotificationOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import moment from "moment";
import type { UploadFile } from "antd/es/upload/interface";
import getTipePelanggaran from "@/data/tipe-pelanggaran";
import { useEffect, useState } from "react";
import { postPelanggaran } from "@/data/post-pelanggaran";
import { toast } from "sonner";
import ModalComplaintSuccess from "@/components/report/ModalComplaintSuccess";

const { TextArea } = Input;

interface AduanFormData {
	jenis_aduan: string;
	uraian: string;
	nama_terlapor: string;
	lokasi: string;
	tanggal: moment.Moment;
	waktu: moment.Moment;
	lampiran?: UploadFile[];
	nama_pelapor?: string;
	hp_pelapor?: string;
	email_pelapor?: string;
}

interface TipePelanggaran {
	id: string;
	name: string;
}

interface ModalFormAduanProps {
	open: boolean;
	onCancel: () => void;
}

const ModalFormAduan = ({ open, onCancel }: ModalFormAduanProps) => {
	const [form] = Form.useForm<AduanFormData>();
	const [tipePelanggaran, setTipePelanggaran] = useState<TipePelanggaran[]>([]);
	const [loading, setLoading] = useState(false);
	const [modalSuccessOpen, setModalSuccessOpen] = useState(false);
	const [complaintId, setComplaintId] = useState("");

	useEffect(() => {
		const fetchTipePelanggaran = async () => {
			try {
				const response = await getTipePelanggaran();
				setTipePelanggaran(response.data || []);
			} catch (error) {
				console.error("Error fetching tipe pelanggaran:", error);
			}
		};

		fetchTipePelanggaran();
	}, []);

	const handleSubmit = async (values: AduanFormData) => {
		setLoading(true);
		try {
			const insident_time = moment
				.utc(
					values.tanggal.format("YYYY-MM-DD") +
						" " +
						values.waktu.format("HH:mm")
				)
				.toISOString();

			const evidence_file = values.lampiran?.[0]?.originFileObj;

			const result = await postPelanggaran({
				reported_name: values.nama_terlapor,
				insident_location: values.lokasi,
				insident_time,
				description: values.uraian,
				reporter_name: values.nama_pelapor || "",
				reporter_phone: values.hp_pelapor || "",
				reporter_email: values.email_pelapor || "",
				complaint_type: values.jenis_aduan,
				evidence_file,
			});

			const id = result?.data?.complaint_id;
			if (id) {
				setComplaintId(id);
				setModalSuccessOpen(true);
				form.resetFields();
				onCancel();
				toast.success("Aduan berhasil dikirim.");
			} else {
				toast.error("Gagal mendapatkan ID laporan.");
			}
		} catch (error) {
			console.error("Error submitting complaint:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Modal
				open={open}
				width="94%"
				style={{
					maxWidth: 1024,
					margin: "1rem auto",
				}}
				onCancel={onCancel}
				footer={null}
				centered>
				<div className="">
					<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<NotificationOutlined /> Buat Aduan
					</h2>

					<Form
						form={form}
						layout="vertical"
						onFinish={handleSubmit}
						className="flex flex-col gap-3">
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex-1 flex flex-col gap-3">
								<Form.Item
									name="jenis_aduan"
									label="Jenis Aduan"
									rules={[{ required: true }]}>
									<Select placeholder="Pilih Jenis Aduan">
										{tipePelanggaran.map((item) => (
											<Select.Option key={item.id} value={item.name}>
												{item.name}
											</Select.Option>
										))}
									</Select>
								</Form.Item>

								<Form.Item
									name="nama_terlapor"
									label="Nama Terlapor"
									rules={[{ required: true }]}>
									<Input />
								</Form.Item>

								<Form.Item
									name="lokasi"
									label="Lokasi Kejadian"
									rules={[{ required: true }]}>
									<Input />
								</Form.Item>

								<Form.Item
									name="tanggal"
									label="Tanggal Kejadian"
									rules={[{ required: true }]}>
									<DatePicker className="w-full" />
								</Form.Item>

								<Form.Item
									name="waktu"
									label="Waktu Kejadian"
									rules={[{ required: true }]}>
									<TimePicker className="w-full" format="HH:mm" />
								</Form.Item>

								<Form.Item
									name="lampiran"
									rules={[{ required: true }]}
									label={
										<span>
											Lampiran / Bukti Pengaduan
											<br />
											<small className="text-red-500">
												Apabila terdapat lebih dari satu bukti-bukti pengaduan,
												mohon <b>disatukan ke dalam satu file</b> terlebih dulu.
											</small>
										</span>
									}
									valuePropName="fileList"
									getValueFromEvent={(e) =>
										Array.isArray(e) ? e : e?.fileList
									}>
									<Upload beforeUpload={() => false} maxCount={1}>
										<Button icon={<UploadOutlined />}>
											Klik untuk mengunggah file
										</Button>
									</Upload>
								</Form.Item>
							</div>

							{/* // Kanan */}
							<div className="flex-1 flex flex-col gap-3">
								<Form.Item
									name="uraian"
									label="Uraian Pengaduan"
									rules={[{ required: true }]}>
									<TextArea rows={10} />
								</Form.Item>

								<Form.Item
									name="nama_pelapor"
									label="Nama Pelapor"
									rules={[{ required: true }]}>
									<Input />
								</Form.Item>

								<Form.Item
									name="hp_pelapor"
									label="Nomor HP Pelapor"
									rules={[{ required: true }]}>
									<Input />
								</Form.Item>

								<Form.Item
									name="email_pelapor"
									label="Email Pelapor"
									rules={[{ type: "email", required: true }]}>
									<Input />
								</Form.Item>
							</div>
						</div>

						<div className="text-sm text-blue-600 bg-blue-50 p-3 rounded flex items-center gap-2">
							<InfoCircleOutlined className="text-blue-500 mt-0.5" />
							<span>
								<b>Nama dan Nomor HP Anda sebagai pelapor</b> sangat berharga
								bagi kami untuk memverifikasi dan memvalidasi laporan Anda.
							</span>
						</div>

						<div className="flex justify-end pt-2">
							<Button type="primary" htmlType="submit" loading={loading}>
								Kirim
							</Button>
						</div>
					</Form>
				</div>
			</Modal>
			<ModalComplaintSuccess
				open={modalSuccessOpen}
				complaintId={complaintId}
				onClose={() => setModalSuccessOpen(false)}
			/>
		</>
	);
};

export default ModalFormAduan;
