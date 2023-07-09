import ProductFilter from "@/components/ProductFilter";
import ProductsList from "@/components/ProductsList";
import { getAllProducts } from "@/services";
import { Product } from "@/types";

export default async function Home() {
  const { data: products } = await getAllProducts();

  return (
    <div className="">
      <div className="flex flex-col md:items-center md:flex-row justify-center md:justify-between">
        <h1 className="text-3xl font-bold text-slate-800 mb-7 text-center">
          Popular Products
        </h1>
        <ProductFilter />
      </div>
      <ProductsList products={products} />
    </div>
  );
}
