"use client";

import { useState, useEffect } from "react";
import getBeritaBySlug from "@/data/berita-slug";

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

interface NewsDetailProps {
	slug: string;
	onTitleLoad?: (title: string) => void;
}

const formatDate = (dateString: string): string => {
	return new Date(dateString).toLocaleDateString("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
};

const LoadingSkeleton = () => (
	<div className="mx-auto container">
		<div className="animate-pulse">
			<div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>
			<div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
			<div className="h-4 bg-gray-300 rounded mb-4 w-1/3"></div>
			<div className="aspect-video bg-gray-300 rounded-lg mb-4"></div>
			<div className="space-y-2">
				<div className="h-4 bg-gray-300 rounded"></div>
				<div className="h-4 bg-gray-300 rounded"></div>
				<div className="h-4 bg-gray-300 rounded w-4/5"></div>
			</div>
		</div>
	</div>
);

const ErrorMessage = ({ message }: { message: string }) => (
	<div className="mx-auto container text-center py-8">
		<p className="text-red-500 mb-4">{message}</p>
		<button
			onClick={() => window.location.reload()}
			className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
			Coba Lagi
		</button>
	</div>
);

const NewsContent = ({ news }: { news: NewsItem }) => (
	<div className="mx-auto container">
		<article className="max-w-4xl mx-auto mb-8">
			<header className="mb-6">
				{/* <h1 className="text-3xl font-bold mb-4">{news.title}</h1> */}
				<div className="text-gray-600 space-y-1 flex justify-between">
					<p>Oleh: {news.author}</p>
					<p>{formatDate(news.created_at)}</p>
				</div>
			</header>

			{news.image_url && (
				<img
					src={news.image_url}
					alt={news.title}
					className="w-full h-auto mb-6 rounded-lg"
				/>
			)}

			<div
				className="prose max-w-none text-gray-700 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: news.content }}
			/>
		</article>
	</div>
);

export default function NewsDetail({ slug, onTitleLoad }: NewsDetailProps) {
	const [news, setNews] = useState<NewsItem | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!slug) return;
		const fetchNews = async () => {
			try {
				const response = await getBeritaBySlug(slug);
				const newsData = response.data;
				console.log("Fetched news data:", newsData);

				if (newsData) {
					setNews(newsData);
					onTitleLoad?.(newsData.title);
				} else {
					setError("Berita tidak ditemukan");
				}
			} catch (err) {
				setError("Gagal memuat berita");
				console.error("Error fetching news:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, [slug, onTitleLoad]);

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorMessage message={error} />;
	if (!news) return <ErrorMessage message="Berita tidak ditemukan" />;

	return <NewsContent news={news} />;
}
