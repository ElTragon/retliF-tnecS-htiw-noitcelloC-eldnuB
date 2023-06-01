import { useState } from "react";
import { baseApiUrl } from "@/consts";

export type Product = {
  handle: string;
  title: string;
  price: number;
  scent_profile: string[];
};

type ReturnType = {
  product?: Product;
  err: string;
};

const getProductEndpoint = "/product/";

export function useProductQuery(productHandle: string): ReturnType {
  const [product, setProduct] = useState<Product>();
  const [err, setErr] = useState<string>("");

  const fetchBundles = async () => {
    await fetch(baseApiUrl + getProductEndpoint + productHandle)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data))
      .catch(() => setErr("something went wrong"));
  };

  fetchBundles();

  return { product, err };
}
