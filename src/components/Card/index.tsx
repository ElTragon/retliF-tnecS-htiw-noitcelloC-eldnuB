import { BundleType } from "@/hooks/useBundleQuery";
import css from "./index.module.css";
import { Price } from "../Price";
import formatList from "@/utils/formatList";

type Props = {
  bundle: BundleType;
};

export function Card({ bundle }: Props) {
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={bundle.imageSrc} alt={bundle.title} />
      </div>

      <h2 className={css.title}>{bundle.title}</h2>

      <Price {...bundle} />

      <div className={css.includedContainer}>
        <h2 className={css.includedTitle}>Included</h2>
        <p className={css.includedList}>
          {formatList(bundle.products_included)}
        </p>
      </div>
    </div>
  );
}
