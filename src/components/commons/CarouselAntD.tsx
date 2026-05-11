"use client";
import getBanners from "@/data/banners";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
  id: string;
  name: string;
  image_url: string;
}

type ArrowProps = {
  onClick?: () => void;
};

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 hover:bg-black cursor-pointer text-white transition-colors duration-500"
  >
    <LeftOutlined className="text-base" />
  </div>
);

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 cursor-pointer text-white transition-colors duration-500"
  >
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
      <div className="container mx-auto px-4 mt-4">
        <div className="relative w-full aspect-[16/6] overflow-hidden rounded-xl bg-gray-200 mb-8 animate-pulse">
          <div className="absolute inset-0" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mb-8">
      <Carousel
        autoplay={{ dotDuration: true }}
        infinite
        autoplaySpeed={5000}
        draggable
        arrows
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        dots
      >
        {banners.map((banner) => (
          <div key={banner.id} className="overflow-hidden rounded-xl">
            <Image
              src={banner.image_url}
              alt={banner.name}
              width={1600}
              height={600}
              className="w-full h-auto rounded-xl transition-opacity duration-500"
              priority
            />
          </div>
        ))}
        {/* <Image
					src="/banner-kurban.png"
					alt="Banner Kurban"
					width={1600}
					height={600}
					sizes="100vw"
					className="object-cover rounded-xl transition-transform duration-300 ease-in-out"
					priority
				/> */}
      </Carousel>
    </div>
  );
}
