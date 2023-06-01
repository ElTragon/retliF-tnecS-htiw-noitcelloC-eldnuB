export type BundleType = {
  handle: string;
  title: string;
  products_included: string[];
  price: number;
  imageSrc: string;
};

export type Product = {
  handle: string;
  title: string;
  price: number;
  scent_profile: string[];
};
