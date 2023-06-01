import { Product } from "@/hooks/useProductQuery";
import css from "./index.module.css";

type Props = {
  price: number;
  products_included: string[];
  allProducts: Product[];
};

function getTolalPrice(products_included: string[], allProducts: Product[]) {
  let totalPrice = 0;

  products_included.forEach((product_included) => {
    let foundProduct = allProducts.find(
      (product) => product.handle === product_included
    );
    if (foundProduct) {
      totalPrice += foundProduct.price;
    }
  });

  return totalPrice;
}

export function Price({ price, products_included, allProducts }: Props) {
  const totalPrice = getTolalPrice(products_included, allProducts);

  if (totalPrice > price) {
    return (
      <h3 className={css.price}>
        <span className={css.totalPrice}>${totalPrice / 100}</span>$
        {price / 100}
        <span className={css.sale}>
          Save ${(totalPrice - price) / 100}
          <div className={css.whiteSquare} />
        </span>
      </h3>
    );
  }
  // in the odd case price is higher than price not sure what I should do

  return <h3 className={css.price}>${price / 100}</h3>;
}
