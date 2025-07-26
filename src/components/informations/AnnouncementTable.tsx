"use client";

import { useEffect, useState } from "react";
import { Table, message, Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import getPengumuman from "@/data/pengumuman";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Pengumuman {
	id: string;
	title: string;
	content: string;
	author: string;
	target_audience: string;
	start_date: string;
	end_date: string;
	attachment_url: string | null;
	is_active: boolean;
	published_at: string | null;
	status: string;
	approved_by: string | null;
	created_at: string;
	updated_at: string;
}

export default function AnnouncementTable() {
	const [data, setData] = useState<Pengumuman[]>([]);
	const [loading, setLoading] = useState(true);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		total: 0,
	});
	const [pageSizeOptions] = useState(["10", "20", "50", "100"]);

	const router = useRouter();

	const fetchData = async (page: number, pageSize: number) => {
		try {
			setLoading(true);
			const res = await getPengumuman(page, pageSize);
			setData(res?.data || []);
			setPagination({ current: page, pageSize, total: res?.total || 0 });
			if (!res?.data && page === 1) message.warning("Data tidak ditemukan");
		} catch (err) {
			console.error(err);
			message.error("Gagal mengambil data pengumuman");
			setData([]);
			setPagination({ current: page, pageSize, total: 0 });
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(1, pagination.pageSize);
	}, []);

	const columns: ColumnsType<Pengumuman> = [
		{
			title: "No",
			key: "index",
			width: 60,
			render: (_, __, index) =>
				(pagination.current - 1) * pagination.pageSize + index + 1,
		},
		{
			title: "Judul",
			dataIndex: "title",
			key: "title",
			render: (text) => <span className="font-medium ">{text}</span>,
		},
		{
			title: "Lihat Detail",
			key: "action",
			width: 150,
			render: (_, record) => (
				<Link
					href={`/informasi/pengumuman/${record.id}`}
					onClick={(e) => e.stopPropagation()}
					className="text-blue-600 hover:text-blue-800">
					<EyeOutlined /> Lihat Detail
				</Link>
			),
		},
	];

	return (
		<div className="w-full mt-2">
			<Card>
				<div className="mb-4 flex justify-between items-center">
					<h2 className="text-lg font-semibold text-gray-800">
						Daftar Pengumuman
					</h2>
					<div className="text-sm text-gray-500">
						Total: {pagination.total} pengumuman
					</div>
				</div>
				<Table
					columns={columns}
					dataSource={data}
					rowKey="id"
					loading={loading}
					pagination={{
						...pagination,
						showSizeChanger: true,
						showQuickJumper: true,
						pageSizeOptions: pageSizeOptions,
						showTotal: (total, range) =>
							`Menampilkan ${range[0]}–${range[1]} dari ${total} pengumuman`,
						onChange: (page, pageSize) => {
							fetchData(page, pageSize || 10);
						},
					}}
					locale={{ emptyText: "Tidak ada pengumuman tersedia" }}
					className="overflow-x-auto"
					scroll={{ x: 500 }}
					rowClassName={({ is_active }) =>
						`cursor-pointer ${
							is_active ? "" : "opacity-60"
						} hover:bg-gray-100 hover:text-blue-600`
					}
					onRow={(record) => ({
						onClick: () => router.push(`/informasi/pengumuman/${record.id}`),
					})}
				/>
			</Card>
		</div>
	);
}
