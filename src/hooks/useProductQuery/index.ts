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
    // const response = await fetch(baseApiUrl + getBundlesEndpoint);
    // const data = await response.json() as BundleType[];
    // setBundles(data);
    await fetch(baseApiUrl + getProductEndpoint + productHandle)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data))
      .catch(() => setErr("something went wroung"));
  };

  fetchBundles();

  //   const { method } = req;

  //   switch (method) {
  //     case "GET":
  //       res.status(200).json(todos);
  //       break;
  //     case "POST":
  //       const { todo, completed } = req.body;
  //       todos.push({
  //         id: todos.length + 1,
  //         todo,
  //         completed,
  //       });
  //       res.status(200).json(todos);
  //       break;
  //     default:
  //       res.setHeader("Allow", ["GET", "POST"]);
  //       res.status(405).end(`Method ${method} Not Allowed`);
  //       break;
  //   }

  return { product, err };
}
