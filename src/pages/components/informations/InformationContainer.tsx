import { Tabs, TabsProps } from "antd";
import NewsList from "./NewsList";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <h3 className="text-lg font-bold">News</h3>,
    children: <NewsList />,
  },
  {
    key: "2",
    label: <h3 className="text-lg font-bold">Annuncement</h3>,
    children: <p>Pengumuman Belum tersedia</p>,
  },
];

const InformationContainer: React.FC = () => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default InformationContainer;
