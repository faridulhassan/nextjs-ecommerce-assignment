// Get All Products

import callAPI from "@/utils/CallApi";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getAllProducts = async () => {
  const url = `${ROOT_API}/products`;
  return callAPI({
    url,
    method: "GET",
  });
};

export const getProductsByCategory = async (category: string) => {
  const url = `${ROOT_API}/products/category/${category}`;
  return callAPI({
    url,
    method: "GET",
  });
};

export const getProductById = async (id: string) => {
  const url = `${ROOT_API}/products/${id}`;
  return callAPI({
    url,
    method: "GET",
  });
};
