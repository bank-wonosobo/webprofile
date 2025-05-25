import jaringanKantor from "@/data/jaringan-kantor";
import { Table } from "antd";

export default function TableJaringanKantor() {
	const dataSource = jaringanKantor;

	const columns = [
		{
			title: "Kantor",
			dataIndex: "nama_kantor",
			key: "nama_kantor",
		},
		{
			title: "Kecamatan",
			dataIndex: "kecamatan",
			key: "kecamatan",
		},
		{
			title: "Alamat",
			dataIndex: "alamat",
			key: "alamat",
		},
		{
			title: "Lokasi di Maps",
			dataIndex: "link_Maps",
			key: "link_Maps",
			width: 120,
			render: (text: string) => (
				<a href={text} target="_blank" rel="noopener noreferrer">
					Lihat di Maps
				</a>
			),
		},
	];

	return (
		<>
			<Table
				dataSource={dataSource}
				columns={columns}
				rowKey="id"
				className="overflow-x-auto"
				scroll={{ x: 800 }}
			/>
		</>
	);
}
