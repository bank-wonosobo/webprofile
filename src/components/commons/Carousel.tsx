// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// // Custom Next Arrow
// const NextArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
//   className,
//   onClick,
// }) => {
//   return (
//     <div
//       className={`${className} `}
//       style={{
//         display: "flex",
//         // background: "red",
//         fontSize: "30px",
//         width: "30px",
//         height: "30px",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "absolute",
//         right: -2,
//       }}
//       onClick={onClick}
//     >
//       {" "}
//     </div>
//   );
// };

// // Custom Prev Arrow
// const PrevArrow: React.FC<{
//   className?: string;
//   onClick?: () => void;
// }> = ({ className, onClick }) => {
//   return (
//     <div
//       className={`${className}`}
//       style={{
//         display: "flex",
//         // background: "red",
//         fontSize: "30px",
//         width: "30px",
//         height: "30px",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "absolute",
//         left: 2,
//         zIndex: 100,
//       }}
//       onClick={onClick}
//     />
//   );
// };

// const BWCarousel: React.FC = () => {
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   return (
//     <div className="slider-container mb-8 pt-[96px] px-3  max-w-[1600px]  mx-auto md:px-8">
//       <Slider {...settings}>
//         {[...Array(1)].map((x, i) => (
//           <div key={i} className="overflow-hidden max-h-[600px] rounded-3xl">
//             <img src="banner-kurban.png" className="w-full" alt="" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//     // <Carousel
//     //   autoplay
//     //   draggable
//     //   dots={{ className: "bg-dark" }}
//     //   autoplaySpeed={1800}
//     //   className="md:px-10 px-1 py-7 rounded-lg pt-28"
//     // >
//     //   <div className="bg-black overflow-hidden max-h-[700px] rounded-3xl">
//     //     <img src="image.png" className="w-full" alt="" />
//     //   </div>
//     //   <div className="bg-black overflow-hidden max-h-[700px] rounded-3xl">
//     //     <img src="image.png" className="w-full" alt="" />
//     //   </div>
//     // </Carousel>
//   );
// };

// export default BWCarousel;
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const images = ["banner-kurban.png", "banner-kurban.png", "banner-kurban.png"];

interface ArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
  >
    <ChevronLeft size={24} />
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
  >
    <ChevronRight size={24} />
  </button>
);

const BWCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative mt-2 w-full container mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="p-4 transition-transform duration-300 ease-in-out"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BWCarousel;
