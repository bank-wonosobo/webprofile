import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ProductCard: React.FC = () => {
  return (
    <Link
      href={"#"}
      className="min-h-[250px] shadow-md w-[290px] flex flex-col justify-start overflow-hidden rounded-2xl hover:-translate-y-3 hover:shadow-xl cursor-pointer transition-all duration-500"
    >
      <div className="relative">
        <div
          className="min-h-[150px] max-h-[150px] bg-cover p-2 text-white content-after-secondary"
          style={{
            backgroundImage: `url('/bg-1.jpg')`,
            backgroundPosition: "10px",
          }}
        >
          <h3 className="text-xl relative top-[70] font-semibold z-10">
            Tamara
          </h3>
          <p className="text-xs relative top-[75] z-50">
            Tabungan Masa Depan Sejahtera
          </p>
        </div>
      </div>

      <div className="p-5">
        <p className="font-medium text-sm mt-2">
          Menabung Lebih Mudah dan Aman, Masa Depan Lebih Cerah
        </p>
        <div className="text-sm mt-3 flex items-center gap-x-2 hover:text-secondary text-primary font-normal ">
          Selengkapnya <FaArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
