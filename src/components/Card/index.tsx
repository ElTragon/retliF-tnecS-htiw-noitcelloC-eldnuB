import { BundleType } from "@/hooks/useBundleQuery";

type Props = {
  bundle: BundleType;
};

export function Card({ bundle }: Props) {
  return (
    <div className="container">
      <div className="image">
        <img src={bundle.imageSrc} alt={bundle.title} />
      </div>

      <div className="title">
        <h2>{bundle.title}</h2>
        price
      </div>

      <div className="included">
        <h2>Included</h2>
        List of products
      </div>
    </div>
  );
}
