"use client";

import { useEffect, useState } from "react";
import { Table, Space, message } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { getOffices, Office } from "@/data/kantor";

export default function TableJaringanKantor() {
	const [dataSource, setDataSource] = useState<Office[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		total: 0,
	});
	const [pageSizeOptions] = useState(["10", "20", "50", "100"]);

	const fetchDataWithPagination = async (page: number, pageSize: number) => {
		try {
			setLoading(true);
			const res = await getOffices(page, pageSize);
			setDataSource(res.data);
			setPagination({
				current: page,
				pageSize: pageSize,
				total: res.total,
			});
		} catch (err) {
			console.error(err);
			message.error("Gagal memuat data kantor");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchDataWithPagination(pagination.current, pagination.pageSize);
	}, []);

	const columns: ColumnsType<Office> = [
		{
			title: "No",
			key: "index",
			width: 60,
			render: (_, __, index) =>
				(pagination.current - 1) * pagination.pageSize + index + 1,
		},
		{
			title: "Nama Kantor",
			dataIndex: "name",
			key: "name",
			render: (text) => <span className="font-medium">{text}</span>,
		},
		{
			title: "Alamat",
			dataIndex: "address",
			key: "address",
			render: (text) => <div className="text-sm text-gray-700">{text}</div>,
		},
		{
			title: "Telepon",
			dataIndex: "phone_number",
			key: "phone_number",
		},
		{
			title: "Map",
			dataIndex: "map_link",
			key: "map_link",
			width: 150,
			render: (link) =>
				link ? (
					<Space>
						<EnvironmentOutlined className="text-blue-600 align-middle" />
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 align-middle">
							Lihat Lokasi
						</a>
					</Space>
				) : (
					<span className="text-gray-400">Tidak tersedia</span>
				),
		},
	];

	return (
		<div className="w-full">
			<div className="mb-4 flex justify-between items-center">
				<h2 className="text-lg font-semibold text-gray-800">Daftar Kantor</h2>
				<div className="text-sm text-gray-500">
					Total: {pagination.total} kantor
				</div>
			</div>

			<Table
				columns={columns}
				dataSource={dataSource}
				rowKey="id"
				loading={loading}
				pagination={{
					...pagination,
					showSizeChanger: true,
					pageSizeOptions: pageSizeOptions,
					showQuickJumper: true,
					showTotal: (total, range) =>
						`Menampilkan ${range[0]}–${range[1]} dari ${total} kantor`,
					onChange: (page, pageSize) =>
						fetchDataWithPagination(page, pageSize || 10),
				}}
				className="overflow-x-auto"
				scroll={{ x: 800 }}
				locale={{ emptyText: "Tidak ada data kantor" }}
			/>
		</div>
	);
}
