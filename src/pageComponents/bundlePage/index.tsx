import { Card } from "@/components/Card";
import css from "./index.module.css";
import { BundlePageProps } from "@/pages";
import { Product, fetchAllProducts } from "@/hooks/useProductQuery";
import { useEffect, useState } from "react";

export default function BundlePage({ bundles, products }: BundlePageProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([] as Product[]);
  const [allScents, setAllScents] = useState<string[]>([] as string[]);
  const [filterScents, setFilterScents] = useState<string[]>([] as string[]);
  // I could hard code this, but this is better since any change in the back in will be reflected in the front-end without breaking things
  //   except for bg-color, we can just add some extra color for this edge case

  const setInitStates = async () => {
    const allProducts = await fetchAllProducts(products);
    setAllProducts(allProducts);
    let scents = [] as string[];
    allProducts.forEach((product) => {
      scents = [...scents, ...product.scent_profile];
    });
    setAllScents(Array.from(new Set(scents)));
    setFilterScents(Array.from(new Set(scents)));
  };

  useEffect(() => {
    setInitStates();
  }, []);

  const onClick = (toggleScent: string) => {
    const foundScent = filterScents.find((scent) => scent === toggleScent);
    let newFilterScents = filterScents;
    if (foundScent) {
      newFilterScents = newFilterScents.filter(
        (scent) => scent !== toggleScent
      );
    } else {
      newFilterScents = [...newFilterScents, toggleScent];
    }
    setFilterScents(newFilterScents);
  };

  return (
    <div className={css.container}>
      <h1 className={css.header}>
        Feel like you just chopped down a tree with your bare hands every time
        you step out of the shower.
      </h1>

      <div className={css.cardContainer}>
        {allScents.map((scent, i) => (
          <>
            <input
              type="checkbox"
              checked={
                filterScents.find((filterScent) => filterScent === scent) !==
                undefined
              }
              name={scent}
              onClick={() => onClick(scent)}
            />
            {scent}
          </>
        ))}
      </div>

      <div className={css.cardContainer}>
        {bundles.map((bundle, i) => (
          <Card
            bundle={bundle}
            allProducts={allProducts}
            filterScents={filterScents}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
