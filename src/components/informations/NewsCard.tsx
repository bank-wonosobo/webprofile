import Link from "next/link";

interface NewsCardProps {
	news: {
		title: string;
		body: string;
		author: string;
		status: string;
		image_url: string;
		date_publish: string;
	};
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
	return (
		<Link
			href={"#"}
			className=" max-w-[350px] h-[300px] justify-start overflow-hidden rounded-xl hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all duration-500 hover:text-black">
			<div className="">
				<div
					className="aspect-video bg-cover p-5 text-white content-after-secondary hover:scale-110 transition-all duration-400"
					style={{
						backgroundImage: `url('${news.image_url}')`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}></div>
			</div>

			<div className="p-5">
				<p className="text-gray-700">{news.date_publish} | Berita</p>
				<p className="font-medium text-sm mt-2">
					{news.title.slice(0, 75)} {news.title.length > 75 && <span>...</span>}
				</p>
			</div>
		</Link>
	);
};

export default NewsCard;
