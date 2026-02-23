"use client";

import { Modal, Button, Input, Space } from "antd";
import { CopyOutlined, EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { useState } from "react";

interface ModalComplaintSuccessProps {
	open: boolean;
	complaintId: string;
	onClose: () => void;
}

const ModalComplaintSuccess = ({
	open,
	complaintId,
	onClose,
}: ModalComplaintSuccessProps) => {
	const router = useRouter();
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(complaintId);
			setCopied(true);
			toast.success("ID berhasil disalin!");
			setTimeout(() => setCopied(false), 2000);
		} catch {
			toast.error("Gagal menyalin ID.");
		}
	};

	const handleView = () => {
		router.push(`/lapor-pelanggaran/${complaintId}`);
	};

	return (
		<Modal
			open={open}
			onCancel={onClose}
			footer={null}
			centered
			width={480}
			destroyOnClose>
			<div className="p-4 text-center space-y-4">
				<h2 className="text-xl font-semibold text-green-600">
					Aduan Berhasil Dikirim!
				</h2>
				<p className="text-gray-700">
					Simpan <strong>ID Laporan</strong> Anda untuk melacak status aduan:
				</p>

				<Input value={complaintId} readOnly className="text-center font-mono" />

				<Space className="mt-3">
					<Button
						icon={<CopyOutlined />}
						onClick={handleCopy}
						type="default"
						disabled={copied}>
						{copied ? "Tersalin" : "Salin"}
					</Button>
					<Button icon={<EyeOutlined />} type="primary" onClick={handleView}>
						Lihat
					</Button>
				</Space>
			</div>
		</Modal>
	);
};

export default ModalComplaintSuccess;
