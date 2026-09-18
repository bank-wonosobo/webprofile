"use client";

import { useState } from "react";
import { Table, message, Space } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface InformationData {
	id: string;
	title: string;
	description: string;
	file_url: string | null;
	uploaded_at: string;
}

export default function TabelInformasiPublik() {
	const [dataSource, setDataSource] = useState<InformationData[]>([]);
	const [loading, setLoading] = useState(true);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		total: 0,
	});

	const fetchDataWithPagination = async (page: number, pageSize: number) => {
		try {
			setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pageSize.toString(),
      });
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/public-information?${params}`
			);

			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} dari ${response.url}`);
			}

			const resJson = await response.json();

			if (resJson.data) {
				setDataSource(resJson.data);
				setPagination({
					current: page,
					pageSize: pageSize,
					total: resJson.total_data,
				});
			} else {
				setDataSource([]);
				setPagination({ current: page, pageSize: pageSize, total: 0 });
				if (page === 1) message.warning("Data tidak ditemukan");
			}
		} catch (error) {
			console.error("Error:", error);
			message.error("Gagal mengambil data");
			setDataSource([]);
			setPagination({ current: page, pageSize: pageSize, total: 0 });
		} finally {
			setLoading(false);
		}
	};


	const columns: ColumnsType<InformationData> = [
		{
			title: "No",
			key: "index",
			width: 60,
			render: (_, __, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
		},
		{
			title: "Judul",
			dataIndex: "title",
			key: "title",
			// width: "25%",
			render: (text) => <span className="font-medium text-gray-800">{text}</span>,
		},
		{
			title: "Deskripsi",
			dataIndex: "description",
			key: "description",
			// width: "40%",
			render: (text) => <span className="text-gray-600">{text || "-"}</span>,
		},
		{
			title: "Aksi",
			key: "action",
			width: 120,
			render: (_, record) => (
				<Space size="middle">
					{record.file_url ? (
						<a
							href={record.file_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:text-secondary font-medium flex items-center gap-1"
						>
							<FileTextOutlined /> Unduh
						</a>
					) : (
						<span className="text-gray-400 italic">Tidak ada file</span>
					)}
				</Space>
			),
		},
	];

	return (
		<div className="bg-white rounded-lg p-2">
			<Table
				columns={columns}
				dataSource={dataSource}
				rowKey="id"
				loading={loading}
				pagination={{
					...pagination,
					onChange: (page, pageSize) => fetchDataWithPagination(page, pageSize),
					showSizeChanger: false,
				}}
				className="shadow-sm border border-gray-100 rounded-lg overflow-hidden"
				scroll={{ x: 800 }}
			/>
		</div>
	);
}
