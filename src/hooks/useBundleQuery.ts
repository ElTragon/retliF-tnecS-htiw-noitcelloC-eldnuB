import { useState } from "react";
import { baseApiUrl } from "@/consts";

export type BundleType = {
  handle: string;
  title: string;
  products_included: string[];
  price: number;
  imageSrc: string;
};

type ReturnType = {
  bundles: BundleType[];
  err: string;
};

const getBundlesEndpoint = "/bundles";

export function useBundleQuery(): ReturnType {
  const [bundles, setBundles] = useState<BundleType[]>([]);
  const [err, setErr] = useState<string>("");

  const fetchBundles = async () => {
    await fetch(baseApiUrl + getBundlesEndpoint)
      .then((res) => res.json())
      .then((data: BundleType[]) => setBundles(data))
      .catch(() => setErr("something went wrong"));
  };

  fetchBundles();

  return { bundles, err };
}
