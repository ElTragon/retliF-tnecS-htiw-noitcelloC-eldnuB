import { cache, useState } from "react";
import { baseApiUrl } from "@/consts";
import { Product } from "@/types";

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
