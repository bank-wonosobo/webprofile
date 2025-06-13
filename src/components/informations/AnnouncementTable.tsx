"use client";

import { useEffect, useState } from "react";
import { Table, message, Tag } from "antd";
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
			width: 120,
			render: (_, { attachment_url }) =>
				attachment_url ? (
					<a
						href={attachment_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
						<PaperClipOutlined />
						Lampiran
					</a>
				) : (
					<span className="text-gray-400">Tidak tersedia</span>
				),
		},
	];

	return (
		<div className="container mx-auto">
			<Table
				columns={columns}
				dataSource={data}
				rowKey="id"
				loading={loading}
				pagination={{
					...pagination,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: (total, [start, end]) =>
						`${start}-${end} dari ${total} pengumuman`,
					onChange: fetchData,
				}}
				locale={{ emptyText: "Tidak ada pengumuman tersedia" }}
				className=" mx-4"
				scroll={{ x: 1200 }}
				rowClassName={({ is_active }) => (is_active ? "" : "opacity-60")}
			/>
		</div>
	);
}
