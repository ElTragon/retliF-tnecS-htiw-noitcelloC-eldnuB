import { Inter } from "next/font/google";
import { useBundleQuery } from "@/hooks/useBundleQuery";
import { useProductQuery } from "@/hooks/useProductQuery";
import { Card } from "@/components/Card";
import css from "./index.module.css";

export default function BundlePage() {
  const { bundles } = useBundleQuery();
  //birchwood-breeze-deodorant
  const { product } = useProductQuery("birchwood-breeze-deodorant");

  return (
    <div className={css.container}>
      <h1 className={css.header}>
        Feel like you just chopped down a tree with your bare hands every time
        you step out of the shower.
      </h1>
      <div className={css.cardContainer}>
        {bundles.map((bundle, i) => (
          <Card bundle={bundle} key={i} />
        ))}
      </div>
      {product && product.price}
    </div>
  );
}
