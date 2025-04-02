import Search from "antd/es/input/Search";

const Hero: React.FC = () => {
  return (
    <section className="w-full pt-[100px] pb-20 bg-[url('/bg-hero-white.png')] bg-orange-50   bg-cover bg-center">
      <div className="mx-auto container">
        <div className="container">
          <h1 className="text-5xl font-bold">Bank Wonosobo</h1>
          <p className="font-normal mt-3">Bank UMKM nya Kabupaten Wonosobo</p>
          <Search
            className="mt-4"
            placeholder="input search text"
            // onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
