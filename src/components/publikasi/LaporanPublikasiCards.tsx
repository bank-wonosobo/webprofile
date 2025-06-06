"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { useEffect, useState } from "react";
import getLaporanByType from "@/data/tipe-laporan";

interface LaporanTypeItem {
	id: number;
	name: string;
	description: string;
}

const LaporanPublikasiCards: React.FC = () => {
	const [publikasi, setPublikasi] = useState<LaporanTypeItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getLaporanByType();
				setPublikasi(response.data || []);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// const generateHref = (name: string) => {
	// 	return `/${name.toLowerCase().replace(/\s+/g, "-")}`;
	// };

	if (loading) {
		return (
			<section className="w-full">
				<div className="mx-auto container">
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
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
			<div className="mx-auto container">
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
					{publikasi.map((loporan) => (
						<Link
							key={loporan.id}
							href={`/publikasi/${loporan.id}/${loporan.name
								.toLowerCase()
								.replace(/\s+/g, "-")}`}
							className="max-w-[350px] p-4 lg:p-8 bg-white rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-pointer border border-black/5">
							<div className="bg-secondary/15 p-6 inline-block rounded-[30px]">
								<LuFiles size={30} className="text-primary" />
							</div>
							<h3 className="mt-4 lg:mt-6 font-bold text-xl text-primary">
								{loporan.name}
							</h3>
							{loporan.description && (
								<p className="text-sm text-gray-600 mt-2 line-clamp-2">
									{loporan.description}
								</p>
							)}
							<div className="text-sm mt-4 flex items-center gap-x-2 hover:text-secondary text-primary font-normal">
								Selengkapnya <FaArrowRight />
							</div>
						</Link>
					))}
				</div>
				{publikasi.length === 0 && !loading && (
					<div className="text-center p-8">
						<p className="text-gray-500">Tidak ada data laporan tersedia</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default LaporanPublikasiCards;
