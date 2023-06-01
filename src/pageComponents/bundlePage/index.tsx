import { Inter } from "next/font/google";
// import { useBundleQuery } from "@/hooks/useBundleQuery";
// import { useProductQuery } from "@/hooks/useProductQuery";
import { Card } from "@/components/Card";
import css from "./index.module.css";
import { BundlePageProps } from "@/pages";
import { Product, fetchAllProducts } from "@/hooks/useProductQuery";
import { useEffect, useState } from "react";
// import { fetchAllProducts } from "@/hooks/useProductQuery";

export default function BundlePage({ bundles, products }: BundlePageProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([] as Product[]);

  const getAllProducts = async () => {
    const allProducts = await fetchAllProducts(products);
    setAllProducts(allProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  // const [products, setProducts] = useState<Product[]>([] as Product[]);
  // }
  return (
    <div className={css.container}>
      <h1 className={css.header}>
        Feel like you just chopped down a tree with your bare hands every time
        you step out of the shower.
      </h1>
      <div className={css.cardContainer}>
        {bundles.map((bundle, i) => (
          <Card bundle={bundle} allProducts={allProducts} key={i} />
        ))}
      </div>
      {/* {product && product.price} */}
    </div>
  );
}
