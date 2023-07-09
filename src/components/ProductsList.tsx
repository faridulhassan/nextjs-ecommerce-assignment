"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "@/types";

import Rating from "./Rating";
// import { addToCart } from "@/redux/cart.slice";
// import { log } from "console";

export default function ProductsList({
  products = [],
}: {
  products: Product[];
}) {
  //   const dispatch = useDispatch();

  return (
    <div className="products-list-wrapper">
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
        {products.map((product) => {
          const { id, title, image, price, rating, description } = product;
          return (
            <div
              className="product p-5 border rounded-md hover:shadow text-center "
              key={id}
            >
              <Link
                href={`/product/${id}`}
                className="text-sm font-medium inline-block "
              >
                <Image
                  src={image}
                  width={150}
                  height={200}
                  alt={title}
                  className="object-contain max-h-36 h-full inline-block mb-3"
                />
                <div>{title}</div>
              </Link>
              <div className="mt-3 mb-3 flex justify-center">
                <Rating rating={rating} />
              </div>
              <div className="price font-bold mb-3">${price}</div>
              <div className="">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    // dispatch(
                    //     addToCart({
                    //       ...product,
                    //     })
                    //   )
                    // console.log("hello");
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
