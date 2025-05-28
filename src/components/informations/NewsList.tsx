"use client";

import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import getBerita from "@/data/berita";

interface NewsItem {
	id: string;
	title: string;
	slug: string;
	content: string;
	author: string;
	image_url: string;
	published_at: string | null;
	status: string;
	approved_by: string | null;
	created_at: string;
	updated_at: string;
}

const formatDate = (dateString: string): string => {
	return new Date(dateString).toLocaleDateString("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
};

const LoadingSkeleton = () => (
	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{Array.from({ length: 8 }).map((_, index) => (
			<div
				key={index}
				className="max-w-[350px] h-[300px] rounded-xl animate-pulse">
				<div className="aspect-video bg-gray-300 rounded-t-xl"></div>
				<div className="p-5 space-y-2">
					<div className="h-4 bg-gray-300 rounded"></div>
					<div className="h-4 bg-gray-300 rounded w-3/4"></div>
				</div>
			</div>
		))}
	</div>
);

const ErrorMessage = ({ message }: { message: string }) => (
	<div className="text-center py-8">
		<p className="text-red-500 mb-4">{message}</p>
		<button
			onClick={() => window.location.reload()}
			className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
			Coba Lagi
		</button>
	</div>
);

const EmptyState = () => (
	<div className="col-span-full text-center py-12">
		<div className="text-gray-400 text-6xl mb-4">📰</div>
		<p className="text-gray-500 text-lg">Belum ada berita tersedia</p>
	</div>
);

const NewsGrid = ({ news }: { news: NewsItem[] }) => {
	if (news.length === 0) {
		return <EmptyState />;
	}

	return (
		<>
			{news.map((item) => (
				<NewsCard
					key={item.id}
					news={{
						title: item.title,
						slug: item.slug,
						content: item.content,
						author: item.author,
						status: item.status,
						imageUrl: item.image_url,
						CreatedAt: formatDate(item.created_at),
					}}
				/>
			))}
		</>
	);
};

const NewsList: React.FC = () => {
	const [news, setNews] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getBerita();
				setNews(response.data || []);
			} catch (err) {
				setError("Gagal memuat berita");
				console.error("Error fetching news:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<div className="flex items-center justify-center md:px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
				<NewsGrid news={news} />
			</div>
		</div>
	);
};

export default NewsList;
