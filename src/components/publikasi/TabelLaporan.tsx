"use client";

import { useEffect, useState } from "react";
import { Table, message, Select, Space } from "antd";
import { FileTextOutlined, CalendarOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import getLaporanPublikasiByType, {
	getAvailableYears,
} from "@/data/laporan-publikasi-by-type";

interface LaporanData {
	id: string;
	title: string;
	description: string;
	period_start: string;
	period_end: string;
	year: number;
	quarter: number | null;
	fileurl: string | null;
	version: string;
	status: string;
	upload_by: string;
	approved_by: string | null;
	report_type: string;
}

interface TabelLaporanProps {
	slug: string;
}

export default function TabelLaporan({ slug }: TabelLaporanProps) {
	const [dataSource, setDataSource] = useState<LaporanData[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedYear, setSelectedYear] = useState<string>(""); // "" means all years
	const [availableYears, setAvailableYears] = useState<number[]>([]);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		total: 0,
	});

	const fetchDataWithPagination = async (page: number, pageSize: number) => {
		if (!slug) return;

		try {
			setLoading(true);
			const response = await getLaporanPublikasiByType(
				selectedYear,
				slug,
				page,
				pageSize
			);

			if (response?.reports) {
				setDataSource(response.reports);
				setPagination({
					current: page,
					pageSize: pageSize,
					total: response.total,
				});
			} else {
				setDataSource([]);
				setPagination({ current: page, pageSize: pageSize, total: 0 });
				if (page === 1) message.warning("Data tidak ditemukan");
			}
		} catch (error) {
			console.error("Error:", error);
			message.error("Gagal mengambil data laporan");
			setDataSource([]);
			setPagination({ current: page, pageSize: pageSize, total: 0 });
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setAvailableYears(getAvailableYears());
	}, []);

	useEffect(() => {
		fetchDataWithPagination(1, 10);
	}, [slug, selectedYear]);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("id-ID", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	const columns: ColumnsType<LaporanData> = [
		{
			title: "No",
			key: "index",
			width: 60,
			render: (_, __, index) => index + 1,
		},
		{
			title: "Nama Laporan",
			dataIndex: "title",
			key: "title",
			render: (text) => (
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-2">
						<span className="font-medium">{text}</span>
					</div>
				</div>
			),
		},
		{
			title: "Periode",
			key: "period",
			width: 180,
			render: (_, record) => (
				<div className="text-sm">
					<div>{formatDate(record.period_start)}</div>
					<div className="text-gray-500">
						s/d {formatDate(record.period_end)}
					</div>
				</div>
			),
		},
		{
			title: "Tahun",
			dataIndex: "year",
			key: "year",
			width: 80,
		},
		{
			title: "Ukuran",
			key: "size",
			width: 100,
			render: (_, record) => (record.fileurl ? "-" : "-"),
		},
		{
			title: "File",
			key: "action",
			width: 120,
			render: (_, record) => (
				<Space>
					{record.fileurl ? (
						<div className="flex items-center gap-2">
							<FileTextOutlined className="text-blue-500" />
							<a
								href={record.fileurl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-700">
								Unduh
							</a>
						</div>
					) : (
						<span className="text-gray-400">Tidak tersedia</span>
					)}
				</Space>
			),
		},
	];

	return (
		<div className="w-full">
			<div className="mb-4 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<CalendarOutlined className="text-gray-500" />
					<span className="text-sm text-gray-600">Filter Tahun:</span>
					<Select
						value={selectedYear}
						onChange={(val) => setSelectedYear(val)}
						style={{ width: 140 }}>
						<Select.Option value="">Semua Tahun</Select.Option>
						{availableYears.map((year) => (
							<Select.Option key={year} value={year.toString()}>
								{year}
							</Select.Option>
						))}
					</Select>
				</div>
				<div className="text-sm text-gray-500">
					Total: {pagination.total} laporan
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
					showQuickJumper: true,
					showTotal: (total, range) =>
						`${range[0]}-${range[1]} dari ${total} laporan`,
					onChange: (page, pageSize) => {
						fetchDataWithPagination(page, pageSize || 10);
					},
				}}
				locale={{
					emptyText: `Tidak ada laporan untuk tahun ${
						selectedYear || "apapun"
					}`,
				}}
				className="overflow-x-auto"
				scroll={{ x: 1000 }}
			/>
		</div>
	);
}
