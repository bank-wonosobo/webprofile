import { Tabs, TabsProps } from "antd";
import NewsList from "./NewsList";

const onChange = (key: string) => {
	console.log(key);
};

const items: TabsProps["items"] = [
	{
		key: "1",
		label: <h3 className="text-lg font-bold">Berita</h3>,
		children: <NewsList />,
	},
	{
		key: "2",
		label: <h3 className="text-lg font-bold">Pengumuman</h3>,
		children: <p className="text-center">Pengumuman belum tersedia</p>,
	},
];

const InformationContainer: React.FC = () => {
	return (
		<div className="mx-auto container">
			<Tabs
				defaultActiveKey="1"
				items={items}
				onChange={onChange}
				className="bg-white w-full rounded-2xl mb-8 pb-8 "
				centered={true}
				size="large"
			/>
		</div>
	);
};

export default InformationContainer;
