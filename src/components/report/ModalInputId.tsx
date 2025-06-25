"use client";

import { Modal, Form, Input, Button } from "antd";
import { useRouter } from "next/router";

interface ModalInputIdProps {
	open: boolean;
	onCancel: () => void;
}

const ModalInputId = ({ open, onCancel }: ModalInputIdProps) => {
	const [form] = Form.useForm();
	const router = useRouter();

	const handleSubmit = (values: { id_laporan: string }) => {
		const id = values.id_laporan.trim();
		if (id) {
			router.push(`/lapor-pelanggaran/${id}`);
		}
	};

	return (
		<Modal open={open} onCancel={onCancel} footer={null} centered width={400}>
			<div className="px-4 py-4">
				<h2 className="text-lg font-semibold mb-4">🔎 Masukkan ID Laporan</h2>

				<Form
					form={form}
					layout="vertical"
					onFinish={handleSubmit}
					className="space-y-2">
					<Form.Item
						name="id_laporan"
						label="ID Laporan"
						rules={[{ required: true, message: "ID laporan wajib diisi" }]}
						className="!mb-2">
						<Input placeholder="Masukkan ID laporan (slug)" />
					</Form.Item>

					<div className="flex justify-end">
						<Button type="primary" htmlType="submit">
							Lihat Detail
						</Button>
					</div>
				</Form>
			</div>
		</Modal>
	);
};

export default ModalInputId;
