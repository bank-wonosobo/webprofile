import news from "@/data/news";
import NewsCard from "./NewsCard";

const NewsList: React.FC = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
			{news.map((item) => (
				<NewsCard news={item} key={item.title} />
			))}

			{news.length === 0 && <p>Berita Belum tersedia</p>}
		</div>
	);
};

export default NewsList;
