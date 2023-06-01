import { BundleType } from "@/hooks/useBundleQuery";

type Props = {
  price: string;
  products_included: string[];
};

export function Price({ price }: Props) {
  return <h3 className="container">{price}</h3>;
}
