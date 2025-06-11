"use client";
import getBanners from "@/data/banners";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { useEffect, useState } from "react";

interface CarouselProps {
	id: string;
	name: string;
	image_url: string;
}

type ArrowProps = {
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
};

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
	<div
		onClick={onClick}
		className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 hover:bg-black cursor-pointer text-white transition-colors duration-500">
		<LeftOutlined className="text-base" />
	</div>
);

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
	<div
		onClick={onClick}
		className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 cursor-pointer transition-colors duration-500">
		<RightOutlined className="text-base" />
	</div>
);

export default function CarouselAntD() {
	const [banners, setBanners] = useState<CarouselProps[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getBanners();
				setBanners(response.data || []);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="container aspect-video animate-pulse mx-auto mt-2 px-4 rounded-xl">
				<div className="bg-gray-200 w-full h-full rounded-xl"></div>
			</div>
		);
	}

	return (
		<div className="container mx-auto mt-2 px-4">
			<Carousel
				effect="fade"
				autoplay={{ dotDuration: true }}
				infinite
				autoplaySpeed={5000}
				draggable
				arrows={true}
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
				dots>
				{banners.map((banner) => (
					<img
						key={banner.id}
						src={banner.image_url}
						className="w-full rounded-xl"
						alt={banner.name}
					/>
				))}
				<img
					src="/banner-kurban.png"
					alt="Banner"
					className="rounded-lg w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
				/>
			</Carousel>
		</div>
	);
}
