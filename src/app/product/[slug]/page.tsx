import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Rating from "@/components/Rating";
import { getProductById } from "@/services";

const demoProduct: Product = {
  id: 12,
  title:
    "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  price: 114,
  description:
    "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  category: "electronics",
  image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  rating: {
    rate: 4.8,
    count: 400,
  },
};

export default async function SingleProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: product } = await getProductById(params.slug);
  const { id, title, image, price, rating, description } = product;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="left w-full md:w-5/12">
        <Image src={image} width={450} height={450} alt={title} />
      </div>
      <div className="right w-full md:w-7/12">
        <h1 className="text-3xl font-bold text-slate-800 mb-5">{title}</h1>
        <p>{description}</p>
        <div className="mt-3 mb-3">
          <Rating rating={rating} />
        </div>
        <div className="price font-bold mb-3">${price}</div>
        <div className="">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
