import { Card } from "@/components/Card";
import css from "./index.module.css";
import { BundlePageProps } from "@/pages";
import { fetchAllProducts } from "@/hooks/useFetchProducts";
import { useEffect, useState } from "react";
import Spinner from "@/utils/Spinner";
import { Product } from "@/types";

export default function BundlePage({ bundles, products }: BundlePageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    setIsLoading(false);
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={css.container}>
      <h1 className={css.header}>
        {filterScents.length !== 0 &&
          "Feel like you just chopped down a tree with your bare hands every time you step out of the shower."}

        {filterScents.length === 0 &&
          "Oh, dear explorer of the soap realm, it appears that your adventurous selection of filters has led you to a pristine realm of absolute emptiness. Alas! The woods of Dr. Squatch hold no treasure that matches your criteria. Fear not, for the journey for the perfect soap continues, and our sudsy wonders await your return. Keep exploring, and together we shall conquer the realm of cleanliness!"}
      </h1>

      <div className={css.flexContainer}>
        {allScents.map((scent, i) => (
          <div className={css.checkboxContainer} key={i}>
            <input
              className={css.checkbox}
              type="checkbox"
              checked={
                filterScents.find((filterScent) => filterScent === scent) !==
                undefined
              }
              name={scent}
              onClick={() => onClick(scent)}
            />
            {scent}
          </div>
        ))}
      </div>

      <div className={css.flexContainer}>
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
