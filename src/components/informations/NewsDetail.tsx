"use client";

import { useState, useEffect } from "react";
import getBeritaBySlug from "@/data/berita-slug";
import Link from "next/link";
// import Image from "next/image";

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
	onError?: (message: string) => void;
}

const formatDate = (dateString: string): string => {
	return new Date(dateString).toLocaleDateString("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
};

const LoadingSkeleton = () => (
	<div className="mx-auto container max-w-4xl">
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

const NewsContent = ({ news }: { news: NewsItem }) => (
	<div className="mx-auto container">
		<article className="max-w-4xl mx-auto mb-8">
			{news.image_url && (
				// <Image
				// 	src={news.image_url}
				// 	alt={news.title}
				// 	className="w-full h-auto mb-4 rounded-lg"
				// />
				<img
					src={news.image_url}
					alt={news.title}
					className="w-full h-auto mb-4 rounded-lg"
				/>
			)}

			<header className="mb-4">
				<div className="text-gray-600 flex justify-between">
					<p>Oleh: {news.author}</p>
					<p>{formatDate(news.created_at)}</p>
				</div>
			</header>

			<div
				className="prose max-w-none text-gray-700 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: news.content }}
			/>
		</article>
	</div>
);

const NotFoundError = ({ slug }: { slug: string }) => (
	<div className="mx-auto container">
		<div className="text-center py-16">
			<div className="mb-6">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-gray-600 mb-2">
					Berita Tidak Ditemukan
				</h2>
				<p className="text-gray-500 mb-6 hidden">
					Berita dengan slug
					<span className="font-mono bg-gray-100 px-2 py-1 rounded">
						{slug}
					</span>
					tidak dapat ditemukan.
				</p>
			</div>

			<div className="space-y-3">
				<div>
					<Link
						href="/informasi"
						className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-3">
						Lihat Semua Berita
					</Link>
					<Link
						href="/"
						className="inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
						Kembali ke Beranda
					</Link>
				</div>
				<button
					onClick={() => window.history.back()}
					className="text-blue-500 hover:text-blue-700 underline">
					Kembali ke halaman sebelumnya
				</button>
			</div>
		</div>
	</div>
);

export default function NewsDetail({
	slug,
	onTitleLoad,
	onError,
}: NewsDetailProps) {
	const [news, setNews] = useState<NewsItem | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isNotFound, setIsNotFound] = useState(false);

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
					const errMsg = "Berita tidak ditemukan";
					setError(errMsg);
					setIsNotFound(true);
					onError?.(errMsg);
				}
			} catch (err) {
				console.error("Error fetching news:", err);

				// Check if it's a "record not found" error
				if (err instanceof Error && err.message.includes("record not found")) {
					setIsNotFound(true);
					const errMsg = "Berita tidak ditemukan";
					setError(errMsg);
					onError?.(errMsg);
				} else {
					// Other errors (network, server, etc.)
					const errMsg = "Gagal memuat berita. Silakan coba lagi nanti.";
					setError(errMsg);
					onError?.(errMsg);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, [slug, onTitleLoad, onError]);

	if (loading) return <LoadingSkeleton />;

	// Show 404 page for not found errors
	if (isNotFound) return <NotFoundError slug={slug} />;

	// For other errors, let parent component handle it
	if (error && !isNotFound) return null;

	if (!news) return null;

	return <NewsContent news={news} />;
}
