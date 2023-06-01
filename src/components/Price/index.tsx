import css from "./index.module.css";

type Props = {
  price: number;
  products_included: string[];
};

export function Price({ price }: Props) {
  return <h3 className={css.price}>${price / 100}</h3>;
}
