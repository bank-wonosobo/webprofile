"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../app/MainLayout";
import SectionLayout from "../app/SectionLayout";
import { Breadcrumb } from "antd";
import { FileTextOutlined, HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

interface Product {
	id: string;
	name: string;
	description: string;
	image_url: string;
	tagline: string;
	product_category: string;
	created_at: string;
	updated_at: string;
}

const fetchProductById = async (id: string): Promise<Product | null> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch product");
		}
		const result = await response.json();
		return result.data ?? null;
	} catch (error) {
		console.error("Fetch error:", error);
		return null;
	}
};

// const formatDate = (dateString: string): string => {
// 	return new Date(dateString).toLocaleDateString("id-ID", {
// 		day: "2-digit",
// 		month: "long",
// 		year: "numeric",
// 	});
// };

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const lowercase = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

const LoadingSkeleton = () => (
	<MainLayout>
		<SectionLayout title="Memuat...">
			<div className="mx-auto container max-w-4xl animate-pulse">
				<div className="h-8 bg-gray-300 rounded mb-4 w-3/4" />
				<div className="h-4 bg-gray-300 rounded mb-2 w-1/2" />
				<div className="aspect-video bg-gray-300 rounded-lg mb-4" />
				<div className="space-y-2">
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-4/5" />
				</div>
			</div>
		</SectionLayout>
	</MainLayout>
);

export default function ProductDetail() {
	const router = useRouter();
	const id = Array.isArray(router.query.slug)
		? router.query.slug[0]
		: router.query.slug ?? "";

	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		if (!id) return;

		const loadProduct = async () => {
			const data = await fetchProductById(id);
			if (data) {
				setProduct(data);
			} else {
				setNotFound(true);
			}
			setLoading(false);
		};

		loadProduct();
	}, [id]);

	if (loading) return <LoadingSkeleton />;
	if (notFound || !product)
		return (
			<div className="text-center py-16">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					Produk Tidak Ditemukan
				</h1>
				<p className="text-gray-600 mb-4">ID: {id}</p>
				<button
					onClick={() => router.back()}
					className="text-blue-600 hover:underline">
					Kembali
				</button>
			</div>
		);

	return (
		<MainLayout>
			<SectionLayout title={product.name}>
				<div className="">
					<Breadcrumb
						items={[
							{
								title: (
									<Link href="/">
										<div className="flex items-center gap-1">
											<HomeOutlined />
											<span>Beranda</span>
										</div>
									</Link>
								),
							},
							{
								title: (
									<Link href={`/${lowercase(product.product_category)}`}>
										<div className="flex items-center gap-1">
											<FileTextOutlined />
											<span>{capitalize(product.product_category)}</span>
										</div>
									</Link>
								),
							},
							{
								title: product.name,
							},
						]}
					/>
				</div>
				<div className="mx-auto container max-w-4xl">
					{product.image_url && (
						<img
							src={product.image_url}
							alt={product.name}
							className="w-full h-auto mb-4 rounded-lg"
						/>
					)}

					<h1 className="text-3xl font-bold text-gray-800 mb-2">
						{product.name}
					</h1>
					<p className="text-lg text-gray-600 italic mb-4">{product.tagline}</p>

					{/* <p className="text-sm text-gray-500 mb-6">
						Kategori: {capitalize(product.product_category)}
					</p> */}

					<div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
						{product.description}
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
