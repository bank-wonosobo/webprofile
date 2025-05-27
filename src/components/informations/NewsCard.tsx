import Link from "next/link";

interface NewsCardProps {
	news: {
		title: string;
		content: string;
		author: string;
		status: string;
		imageUrl: string;
		CreatedAt: string;
	};
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
	return (
		<Link
			href={"/informasi/" + news.title}
			className=" max-w-[350px] h-[300px] justify-center overflow-hidden rounded-xl hover:-translate-y-2 shadow-md hover:shadow-xl cursor-pointer transition-all duration-500 hover:text-black">
			<div className="">
				<div
					className="aspect-video bg-cover text-white content-after-secondary transition-all duration-400"
					style={{
						backgroundImage: `url('${news.imageUrl}')`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}></div>
			</div>

			<div className="p-5">
				<p className="text-gray-700">{news.CreatedAt} | Berita</p>
				<p className="font-medium text-sm mt-2">
					{news.title.slice(0, 75)} {news.title.length > 75 && <span>...</span>}
				</p>
			</div>
		</Link>
	);
};

export default NewsCard;
