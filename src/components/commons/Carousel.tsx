import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Custom Next Arrow
const NextArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
  className,
  onClick,
}) => {
  return (
    <div
      className={`${className} `}
      style={{
        display: "flex",
        // background: "red",
        fontSize: "30px",
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: -2,
      }}
      onClick={onClick}
    >
      {" "}
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow: React.FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => {
  return (
    <div
      className={`${className}`}
      style={{
        display: "flex",
        // background: "red",
        fontSize: "30px",
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 2,
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
};

const BWCarousel: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container mb-8 pt-[96px] px-3 md:px-8">
      <Slider {...settings}>
        {[...Array(10)].map((x, i) => (
          <div key={i} className="overflow-hidden max-h-[600px] rounded-3xl">
            <img src="image.png" className="w-full" alt="" />
          </div>
        ))}
      </Slider>
    </div>
    // <Carousel
    //   autoplay
    //   draggable
    //   dots={{ className: "bg-dark" }}
    //   autoplaySpeed={1800}
    //   className="md:px-10 px-1 py-7 rounded-lg pt-28"
    // >
    //   <div className="bg-black overflow-hidden max-h-[700px] rounded-3xl">
    //     <img src="image.png" className="w-full" alt="" />
    //   </div>
    //   <div className="bg-black overflow-hidden max-h-[700px] rounded-3xl">
    //     <img src="image.png" className="w-full" alt="" />
    //   </div>
    // </Carousel>
  );
};

export default BWCarousel;
