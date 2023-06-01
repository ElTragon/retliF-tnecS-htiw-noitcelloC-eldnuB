import { BundleType } from "@/hooks/useBundleQuery";
import css from "./index.module.css";
import { Price } from "../Price";
import formatList from "@/utils/formatList";
import { Product } from "@/hooks/useProductQuery";
import { Chip } from "../Chip";
import cx from "classnames";

type Props = {
  bundle: BundleType;
  allProducts: Product[];
  filterScents: string[];
};

function getScents(
  products_included: string[],
  allProducts: Product[]
): string[] {
  let result = [] as string[];

  products_included.forEach((product_included) => {
    let foundProduct = allProducts.find(
      (product) => product.handle == product_included
    );
    if (foundProduct) {
      result = [...result, ...foundProduct.scent_profile];
    }
  });

  return Array.from(new Set(result));
}

export function Card({ bundle, allProducts, filterScents }: Props) {
  const scents = getScents(bundle.products_included, allProducts);

  return (
    <div
      className={cx(css.container, {
        [css.hide]: !filterScents.some((scent) => scents.includes(scent)),
      })}
    >
      <div className={css.imageContainer}>
        <img src={bundle.imageSrc} alt={bundle.title} />
      </div>

      <h2 className={css.title}>{bundle.title}</h2>

      <Price {...bundle} />

      <div className={css.chipContainer}>
        {scents.map((scent, i) => (
          <Chip key={i} scent={scent} />
        ))}
      </div>

      <div className={css.includedContainer}>
        <h2 className={css.includedTitle}>Included</h2>
        <p className={css.includedList}>
          {formatList(bundle.products_included)}
        </p>
      </div>
    </div>
  );
}
