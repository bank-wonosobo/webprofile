"use client";

import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import getBerita from "@/data/berita";

interface NewsItem {
	ID: string;
	Title: string;
	Slug: string;
	Content: string;
	Author: string;
	ImageUrl: string;
	PublishedAt: string | null;
	Status: string;
	ApprovedBy: string | null;
	CreatedAt: string;
	UpdatedAt: string;
}

// Function to format date to readable format
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);

	// Format: DD Month YYYY
	const options: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "long",
		year: "numeric",
	};

	return date.toLocaleDateString("id-ID", options);
};

const NewsList: React.FC = () => {
	const [news, setNews] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setLoading(true);
				const response = await getBerita();

				// Extract data from response
				const newsData = response.data || [];
				setNews(newsData);
			} catch (err) {
				setError("Failed to fetch news");
				console.error("Error fetching news:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	if (loading) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{/* Loading skeleton */}
				{[...Array(8)].map((_, index) => (
					<div
						key={index}
						className="max-w-[350px] h-[300px] rounded-xl animate-pulse ">
						<div className="aspect-video bg-gray-300 rounded-t-xl"></div>
						<div className="p-5">
							<div className="h-4 bg-gray-300 rounded mb-2"></div>
							<div className="h-4 bg-gray-300 rounded w-3/4"></div>
						</div>
					</div>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-8">
				<p className="text-red-500">{error}</p>
				<button
					onClick={() => window.location.reload()}
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
					Coba Lagi
				</button>
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center md:px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
				{news.map((item) => (
					<NewsCard
						news={{
							title: item.Title,
							content: item.Content,
							author: item.Author,
							status: item.Status,
							imageUrl: item.ImageUrl,
							CreatedAt: formatDate(item.CreatedAt),
						}}
						key={item.ID}
					/>
				))}

				{news.length === 0 && (
					<div className="col-span-full text-center py-8">
						<p className="text-gray-500">Berita belum tersedia</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default NewsList;
