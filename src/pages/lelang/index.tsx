import MainLayout from "@/components/app/MainLayout";
import SectionLayout from "@/components/app/SectionLayout";
import { getAuctions, type ApiAuctionItem } from "@/data/auction";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";

interface LelangPageProps {
	items: ApiAuctionItem[];
	currentPage: number;
	totalPage: number;
	total: number;
}

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const EmptyAuctionState = () => (
	<div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
		<img src="/lelang.svg" alt="Lelang" className="mb-4 h-44 w-44" />
		<p className="text-base text-gray-600">Lelang belum tersedia saat ini.</p>
	</div>
);

export default function Lelang({
	items,
	currentPage,
	totalPage,
	total,
}: LelangPageProps) {
	const [previewImage, setPreviewImage] = useState<string | null>(null);

	return (
		<MainLayout>
			<SectionLayout title="Lelang">
				<div className="mx-auto container max-w-6xl px-4">
					{items.length === 0 ? (
						<EmptyAuctionState />
					) : (
						<>
							<div className="mb-4 flex items-center justify-between">
								<div>
									<h2 className="text-2xl font-bold text-primary">
										Daftar Lelang
									</h2>
									<p className="mt-1 text-sm text-gray-500">
										Total {total} data lelang tersedia
									</p>
								</div>
							</div>

							<div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
								<div className="hidden overflow-x-auto md:block">
									<table className="min-w-full">
										<thead className="border-b border-gray-100 bg-slate-50">
											<tr>
												<th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
													Preview
												</th>
												<th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
													Judul
												</th>
												<th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
													Deskripsi
												</th>
												<th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
													Link
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-100">
											{items.map((item) => (
												<tr key={item.id}>
													<td className="px-5 py-4 text-sm">
														{item.image_url ? (
															<button
																type="button"
																onClick={() => setPreviewImage(item.image_url ?? null)}
																className="overflow-hidden rounded-lg border border-slate-200 transition hover:border-primary/40">
																<img
																	src={item.image_url}
																	alt={item.title}
																	className="h-[100px] w-[100px] object-cover"
																/>
															</button>
														) : (
															<span className="italic text-gray-400">Kosong</span>
														)}
													</td>
													<td className="px-5 py-4 text-sm font-semibold text-gray-900">
														{item.title}
													</td>
													<td className="px-5 py-4 text-sm text-gray-600">
														<div className="line-clamp-3">
															{stripHtml(item.description)}
														</div>
													</td>
													<td className="px-5 py-4 text-sm">
														<a
															href={item.link}
															target="_blank"
															rel="noreferrer"
															className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90">
															Buka Link
														</a>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								<div className="divide-y divide-gray-100 md:hidden">
									{items.map((item) => (
										<div key={item.id} className="space-y-4 p-5">
											{item.image_url ? (
												<button
													type="button"
													onClick={() => setPreviewImage(item.image_url ?? null)}
													className="overflow-hidden rounded-xl border border-slate-200">
													<img
														src={item.image_url}
														alt={item.title}
														className="h-32 w-full object-cover"
													/>
												</button>
											) : null}
											<div>
												<h3 className="text-lg font-semibold text-primary">
													{item.title}
												</h3>
												<p className="mt-2 text-sm leading-relaxed text-gray-600">
													{stripHtml(item.description)}
												</p>
											</div>
											<div className="flex flex-wrap gap-3 text-sm">
												{item.image_url ? (
													<a
														href={item.image_url}
														target="_blank"
														rel="noreferrer"
														className="text-blue-600 hover:text-blue-800">
														Lihat Gambar
													</a>
												) : (
													<span className="italic text-gray-400">Gambar kosong</span>
												)}
												<a
													href={item.link}
													target="_blank"
													rel="noreferrer"
													className="font-semibold text-primary hover:text-primary/80">
													Buka Link
												</a>
											</div>
										</div>
									))}
								</div>
							</div>

							{totalPage > 1 ? (
								<div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
									<p className="text-sm text-gray-500">
										Halaman {currentPage} dari {totalPage}
									</p>
									<div className="flex items-center gap-2">
										{currentPage > 1 ? (
											<Link
												href={`/lelang?page=${currentPage - 1}`}
												className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
												Sebelumnya
											</Link>
										) : null}
										{currentPage < totalPage ? (
											<Link
												href={`/lelang?page=${currentPage + 1}`}
												className="rounded-full bg-primary px-4 py-2 text-sm text-white transition-colors hover:bg-primary/90">
												Berikutnya
											</Link>
										) : null}
									</div>
								</div>
							) : null}
						</>
					)}
				</div>
			</SectionLayout>

			{previewImage ? (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
					onClick={() => setPreviewImage(null)}>
					<div
						className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white p-2"
						onClick={(event) => event.stopPropagation()}>
						<button
							type="button"
							onClick={() => setPreviewImage(null)}
							className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white transition hover:bg-black">
							Tutup
						</button>
						<img
							src={previewImage}
							alt="Preview lelang"
							className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
						/>
					</div>
				</div>
			) : null}
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<LelangPageProps> = async (
	context,
) => {
	const pageParam = Array.isArray(context.query.page)
		? context.query.page[0]
		: context.query.page;
	const parsedPage = Number(pageParam);
	const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
	const limit = 10;
	const result = await getAuctions(currentPage, limit);

	return {
		props: {
			items: result.data,
			currentPage: result.page,
			totalPage: result.total_page,
			total: result.total,
		},
	};
};
