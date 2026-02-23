"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { Breadcrumb } from "antd";
import {
	DownloadOutlined,
	HomeOutlined,
	NotificationOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { fetchPengumumanById, Announcement } from "@/data/pengumuman-slug";

const LoadingSkeleton = () => (
	<MainLayout>
		<SectionLayout title="Memuat Pengumuman...">
			<div className="animate-pulse space-y-4 max-w-4xl mx-auto">
				<div className="h-8 bg-gray-300 rounded w-3/4" />
				<div className="h-4 bg-gray-300 rounded w-1/2" />
				<div className="aspect-video bg-gray-300 rounded-lg" />
				<div className="space-y-2">
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-4/5" />
				</div>
			</div>
		</SectionLayout>
	</MainLayout>
);

export default function PengumumanDetail() {
	const router = useRouter();
	const id = Array.isArray(router.query.slug)
		? router.query.slug[0]
		: router.query.slug ?? "";

	const [data, setData] = useState<Announcement | null>(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		if (!id) return;
		const loadData = async () => {
			const result = await fetchPengumumanById(id);
			if (result) {
				setData(result);
			} else {
				setNotFound(true);
			}
			setLoading(false);
		};
		loadData();
	}, [id]);

	if (loading) return <LoadingSkeleton />;
	if (notFound || !data)
		return (
			<MainLayout>
				<SectionLayout title="Pengumuman Tidak Ditemukan">
					<div className="text-center py-16">
						<h1 className="text-4xl font-bold mb-4">Tidak Ditemukan</h1>
						<p className="text-gray-600 mb-4">ID: {id}</p>
						<button
							onClick={() => router.back()}
							className="text-blue-600 hover:underline">
							Kembali
						</button>
					</div>
				</SectionLayout>
			</MainLayout>
		);

	return (
		<MainLayout>
			<SectionLayout title={data.title}>
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
								<Link href="/informasi">
									<div className="flex items-center gap-1">
										<NotificationOutlined />
										<span>Informasi</span>
									</div>
								</Link>
							),
						},
						{
							title: data.title,
						},
					]}
					className="mb-4"
				/>

				<div className="max-w-4xl mx-auto space-y-4 w-full">
					{data.attachment_url && (
						<img
							src={data.attachment_url}
							alt={data.title}
							className="rounded-lg w-full object-contain"
						/>
					)}
					<div
						className="prose max-w-none"
						dangerouslySetInnerHTML={{ __html: data.content }}
					/>

					{/* <div className="text-sm text-gray-500 space-y-1 ">
						<p>Penulis: {data.author}</p>
						<p>Disetujui oleh: {data.approved_by}</p>
						<p>Target: {data.target_audience}</p>
						<p>
							Periode: {new Date(data.start_date).toLocaleDateString()} -{" "}
							{new Date(data.end_date).toLocaleDateString()}
						</p>
						<p>Status: {data.status}</p>
					</div> */}

					<div
						className="flex justify-between items-center p-4 px-6 w-full lg:w-3/4 mx-auto bg-primary text-white transition-colors rounded-full cursor-pointer hover:bg-primary/80"
						onClick={() => window.open(data.attachment_url, "_blank")}
						role="link">
						<p>Informasi lengkap {data.title}</p>

						<DownloadOutlined style={{ fontSize: 24 }} />
					</div>
				</div>
			</SectionLayout>
		</MainLayout>
	);
}
