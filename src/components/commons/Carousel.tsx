import { Carousel } from "antd";

const BWCarousel: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={1800} className="pt-[70px] bg-blue-50">
      <div className="bg-black overflow-hidden max-h-[700px] rounded-br-[50px] lg:rounded-br-[200px]">
        <img src="image.png" className="w-full" alt="" />
      </div>
      <div className="bg-black overflow-hidden max-h-[700px] rounded-br-[50px] lg:rounded-br-[200px]">
        <img src="image.png" className="w-full" alt="" />
      </div>
    </Carousel>
  );
};

export default BWCarousel;
