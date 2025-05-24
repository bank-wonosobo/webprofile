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
		children: <p>Pengumuman Belum tersedia</p>,
	},
];

const InformationContainer: React.FC = () => {
	return (
		<section className="w-full py-10 bg-[#f0f5f8]">
			<div className="mx-auto container">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl mb-5">
					Berita & Pengumuman
				</h2>
				<Tabs
					defaultActiveKey="1"
					items={items}
					onChange={onChange}
					className="bg-white px-10 pb-10 rounded-2xl"
					centered={true}
					size="large"
				/>
			</div>
		</section>
	);
};

export default InformationContainer;
