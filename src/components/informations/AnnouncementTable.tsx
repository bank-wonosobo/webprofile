"use client";

import { useEffect, useState } from "react";
import { Table, message, Tag, Card, Space } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import getPengumuman from "@/data/pengumuman";

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

	const formatDate = (date: string) =>
		new Date(date).toLocaleDateString("id-ID", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});

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
			render: (text) => <span className="font-medium">{text}</span>,
		},
		{
			title: "Deskripsi",
			dataIndex: "content",
			key: "content",
			width: 400,
			render: (html) => {
				const el = document.createElement("div");
				el.innerHTML = html || "";
				const text = el.textContent || el.innerText || "";
				return (
					<div className="text-sm text-gray-700 line-clamp-3">
						{text || "-"}
					</div>
				);
			},
		},
		{
			title: "Status",
			dataIndex: "is_active",
			key: "is_active",
			width: 100,
			render: (active) => (
				<Tag color={active ? "green" : "red"} className="text-xs">
					{active ? "Aktif" : "Tidak Aktif"}
				</Tag>
			),
		},
		{
			title: "Periode",
			key: "period",
			width: 180,
			render: (_, { start_date, end_date }) => (
				<div className="text-sm">
					<div>{formatDate(start_date)}</div>
					<div className="text-gray-500">s/d {formatDate(end_date)}</div>
				</div>
			),
		},
		{
			title: "Lampiran",
			key: "attachment_url",
			width: 130,
			render: (_, { attachment_url }) =>
				attachment_url ? (
					<Space>
						<PaperClipOutlined className="text-blue-600 align-middle" />
						<a
							href={attachment_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 align-middle">
							Lampiran
						</a>
					</Space>
				) : (
					<span className="text-gray-400">Tidak tersedia</span>
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
					scroll={{ x: 1000 }}
					rowClassName={({ is_active }) => (is_active ? "" : "opacity-60")}
				/>
			</Card>
		</div>
	);
}
