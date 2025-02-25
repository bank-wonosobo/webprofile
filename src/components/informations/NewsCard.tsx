import Link from "next/link";

const NewsCard: React.FC = () => {
  return (
    <Link
      href={"#"}
      className="shadow-md max-w-[350px] flex flex-row justify-start overflow-hidden rounded-xl hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all duration-500 hover:text-black"
    >
      <div className="relative">
        <div
          className="h-[150px] w-[150px] bg-cover p-5 text-white content-after-secondary hover:scale-110 transition-all duration-700"
          style={{
            backgroundImage: `url('/image.png')`,
            backgroundPosition: "10px",
          }}
        ></div>
      </div>

      <div className="p-5">
        <p className="text-gray-700">20 Jan 2025 | Berita</p>
        <p className="font-medium text-sm mt-2">
          Menabung Lebih Mudah dan Aman, Masa Depan Lebih Cerah
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
