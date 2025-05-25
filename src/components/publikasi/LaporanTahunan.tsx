"use client";

import { useEffect, useState } from "react";
import { Table, message } from "antd";
import { CalendarOutlined, FileTextOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import getLaporanPublikasi from "@/data/laporan-publikasi";

// Type definitions
interface LaporanData {
	id: number;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
}

interface ApiResponse {
	data: LaporanData[];
}

export default function TabelLaporanTahunan() {
	const [dataSource, setDataSource] = useState<LaporanData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				setLoading(true);
				const response: ApiResponse = await getLaporanPublikasi();

				// Pastikan response memiliki struktur yang benar
				if (response && response.data) {
					setDataSource(response.data);
				} else {
					setDataSource([]);
					message.warning("Data tidak ditemukan");
				}
			} catch (error: unknown) {
				console.error("Error fetching data:", error);
				message.error("Gagal mengambil data laporan");
				setDataSource([]);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const columns: ColumnsType<LaporanData> = [
		{
			title: "No",
			key: "index",
			width: 60,
			render: (_: unknown, __: LaporanData, index: number) => index + 1,
		},
		{
			title: "Nama Laporan",
			dataIndex: "name",
			key: "name",
			render: (text: string) => (
				<div className="flex items-center gap-2">
					<FileTextOutlined className="text-blue-500" />
					<span className="font-medium">{text}</span>
				</div>
			),
		},
		{
			title: "Deskripsi",
			dataIndex: "description",
			key: "description",
			ellipsis: true,
		},
		// {
		// 	title: "Tanggal Dibuat",
		// 	dataIndex: "created_at",
		// 	key: "created_at",
		// 	width: 180,
		// 	render: (date: string) => (
		// 		<div className="flex items-center gap-1">
		// 			<CalendarOutlined className="text-gray-500" />
		// 			<span>
		// 				{new Date(date).toLocaleDateString("id-ID", {
		// 					day: "2-digit",
		// 					month: "long",
		// 					year: "numeric",
		// 				})}
		// 			</span>
		// 		</div>
		// 	),
		// },
		{
			title: "Terakhir Diperbarui",
			dataIndex: "updated_at",
			key: "updated_at",
			width: 180,
			render: (date: string) => (
				<div className="flex items-center gap-1">
					<CalendarOutlined className="text-gray-500" />
					<span>
						{new Date(date).toLocaleDateString("id-ID", {
							day: "2-digit",
							month: "long",
							year: "numeric",
						})}
					</span>
				</div>
			),
		},
		{
			title: "Ukuran",
			dataIndex: "size",
			width: 120,
			key: "size",
			// render: (_: unknown, record: LaporanData) => record.size,
		},
		{
			title: "Aksi",
			key: "action",
			width: 100,
			render: (_: unknown, record: LaporanData) => (
				<a href={`/laporan-tahunan/${record.id}`} className="text-blue-500">
					Lihat
				</a>
			),
		},
	];

	return (
		<div className="w-full">
			<Table
				columns={columns}
				dataSource={dataSource}
				rowKey="id"
				loading={loading}
				// pagination={{
				// 	total: dataSource.length,
				// 	pageSize: 10,
				// 	showSizeChanger: true,
				// 	showQuickJumper: true,
				// 	showTotal: (total, range) =>
				// 		`${range[0]}-${range[1]} dari ${total} laporan`,
				// }}
				locale={{
					emptyText: "Tidak ada data laporan",
				}}
				className="overflow-x-auto"
				scroll={{ x: 800 }}
			/>
		</div>
	);
}
