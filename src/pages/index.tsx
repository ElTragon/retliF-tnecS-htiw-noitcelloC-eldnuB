import Page from "@/utils/Page";
import BundlePage from "@/pageComponents/bundlePage";
import { baseApiUrl } from "@/consts";
import { GetServerSideProps } from "next";
import { BundleType } from "@/types";

export type BundlePageProps = {
  bundles: BundleType[];
  products: string[];
  err: string;
};

const getBundlesEndpoint = "/bundles";

export default function Home(props: BundlePageProps) {
  return (
    <Page>
      <BundlePage {...props} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<
  BundlePageProps
> = async () => {
  const bundlesRes = await fetch(baseApiUrl + getBundlesEndpoint);
  const bundles = (await bundlesRes.json()) as BundleType[];

  let products = [] as string[];
  bundles.forEach((bundle) => {
    products = [...products, ...bundle.products_included];
  });
  products = Array.from(new Set(products));

  return {
    props: {
      bundles,
      products,
      err:
        bundles === ([] as BundleType[]) || products === ([] as string[])
          ? "something went wrong"
          : "",
    },
  };
};
