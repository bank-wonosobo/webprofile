import ProductCard from "./ProfuctCard";

const ProductList: React.FC = () => {
  return (
    <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 gap-x-12 mt-20 gap-y-12 mb-11 container mx-auto">
      <ProductCard />
    </div>
  );
};

export default ProductList;
