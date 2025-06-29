"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import getProdukLayanan from "@/data/produk-layanan";

interface ProdukLayananItem {
	id: string;
	name: string;
	description: string;
	image_url: string;
	tagline: string;
	product_category: string;
}

interface ProductsGridProps {
	category?: string;
	link?: string;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ category, link }) => {
	const [produkLayanan, setProdukLayanan] = useState<ProdukLayananItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getProdukLayanan(category ?? "");
				setProdukLayanan(response.data || []);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [category]);

	if (loading) {
		return (
			<section className="w-full">
				<div className="mx-auto container">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 m-4">
						{[...Array(8)].map((_, index) => (
							<div
								key={index}
								className="max-w-[350px] p-4 lg:p-8 bg-white rounded-xl border border-black/5 animate-pulse">
								<div className="bg-gray-200 p-6 inline-block rounded-[30px] w-16 h-16"></div>
								<div className="mt-4 lg:mt-6 h-6 bg-gray-200 rounded w-3/4"></div>
								<div className="mt-4 h-4 bg-gray-200 rounded w-1/2"></div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="w-full">
			<div className="mx-auto container flex flex-col items-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-auto">
					{produkLayanan.map((item) => (
						<Link
							key={item.id}
							href={`${link}/${item.id}`}
							className="max-w-[350px] bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border border-black/5 hover:-translate-y-2">
							{/* Bagian Gambar + Overlay Text */}
							<div className="relative h-56">
								<img
									src={item.image_url}
									alt={item.name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/40 px-4 py-3 flex flex-col justify-end text-white">
									<h3 className="text-lg font-semibold">{item.name}</h3>
									<p className="text-sm">{item.tagline}</p>
								</div>
							</div>
							<div className="p-4">
								{item.description && (
									<p className="text-sm text-gray-600 mt-2 line-clamp-2 ">
										{item.description}
									</p>
								)}
								<div className="text-sm mt-4 flex items-center gap-x-2 hover:text-secondary text-primary font-normal">
									Selengkapnya <FaArrowRight />
								</div>
							</div>
						</Link>
					))}
				</div>
				{produkLayanan.length === 0 && !loading && (
					<div className="text-center p-8">
						<p className="text-gray-500">Tidak ada data yang tersedia</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProductsGrid;
