import { cache, useState } from "react";
import { baseApiUrl } from "@/consts";

export type Product = {
  handle: string;
  title: string;
  price: number;
  scent_profile: string[];
};

type ReturnType = {
  allProducts?: Product[];
  err: string;
};

// const getProductEndpoint = "/product/";

// const fetchProduct = cache(async (handle: string) => {
//     await fetch(baseApiUrl + getProductEndpoint + handle)
//       .then((res) => res.json())
//       .then((data: Product) => setProduct(data))
//       .catch(() => setErr("something went wrong"));
//   });

const getProductEndpoint = "/product/";

async function fetchData(handle: string): Promise<Product> {
  const response = await fetch(baseApiUrl + getProductEndpoint + handle);
  const data = await response.json();
  return data;
}

export async function fetchAllProducts(
  totalProducts: string[]
): Promise<Product[]> {
  const promises = totalProducts.map((product) => fetchData(product));
  const allProductsData = await Promise.all(promises);
  return allProductsData;
}

// export async function useProductsQuery(
//   totalProducts: string[]
// ): ReturnType {
//   const [allProducts, setProduct] = useState<Product[]>();
//   const [err, setErr] = useState<string>("");

//   const resolveProducts = async (totalProducts: string[]) => {
//     await fetchAllProducts(totalProducts)).resolveAll()
//       .catch(() => setErr("something went wrong"));
//   };

//   // if calls to give handle happened before, then I return the previous result of the call

//   setProduct(await fetchAllProducts(totalProducts));

//   return { allProducts, err };
// }

// // Example usage
// fetchAllProducts()
//   .then((productsData) => {
//     console.log(productsData);
//   })
//   .catch((error) => {
//     console.error('Error fetching products:', error);
//   });
