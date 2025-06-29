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
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";
import type { UploadFile } from "antd/es/upload/interface";

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
}

interface ModalFormAduanProps {
	open: boolean;
	onCancel: () => void;
}

const ModalFormAduan = ({ open, onCancel }: ModalFormAduanProps) => {
	const [form] = Form.useForm<AduanFormData>();

	const handleSubmit = (values: AduanFormData) => {
		console.log("Form values:", values);
	};

	return (
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
					📢 Buat Aduan
				</h2>

				<Form
					form={form}
					layout="vertical"
					onFinish={handleSubmit}
					className="flex flex-col gap-3">
					<div className="flex flex-col md:flex-row gap-4">
						{/* Kolom Kiri */}
						<div className="flex-1 flex flex-col gap-3">
							<Form.Item
								name="jenis_aduan"
								label="Jenis Aduan"
								rules={[{ required: true }]}>
								<Select placeholder="Pilih Jenis Aduan">
									<Select.Option value="pelecehan">Pelecehan</Select.Option>
									<Select.Option value="korupsi">Korupsi</Select.Option>
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
						</div>

						{/* Kolom Kanan */}
						<div className="flex-1 flex flex-col gap-3">
							<Form.Item
								name="uraian"
								label="Uraian Pengaduan"
								rules={[{ required: true }]}>
								<TextArea rows={6} />
							</Form.Item>

							<Form.Item
								name="lampiran"
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
								getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}>
								<Upload beforeUpload={() => false} maxCount={1}>
									<Button icon={<UploadOutlined />}>
										Klik untuk mengunggah file
									</Button>
								</Upload>
							</Form.Item>

							<Form.Item name="nama_pelapor" label="Nama Pelapor (opsional)">
								<Input />
							</Form.Item>

							<Form.Item name="hp_pelapor" label="Nomor HP Pelapor (opsional)">
								<Input />
							</Form.Item>
						</div>
					</div>

					{/* Informasi Tambahan */}
					<div className="text-sm text-blue-600 bg-blue-50 p-3 rounded">
						<b>ℹ️ Nama dan Nomor HP Anda sebagai pelapor</b> sangat berharga
						bagi kami untuk memverifikasi dan memvalidasi laporan Anda.
					</div>

					{/* Tombol Submit */}
					<div className="flex justify-end pt-2">
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</div>
				</Form>
			</div>
		</Modal>
	);
};

export default ModalFormAduan;
