import Head from "next/head";

export default function Seo() {
  return (
    <Head>
      <title>Bundle Collection with Scent Filter</title>
      <meta
        name="description"
        content="Bundle Collection with Scent Filter by Mario"
      />
      <meta
        name="image"
        property="og:image"
        content="https://cdn.shopify.com/s/files/1/0275/7784/3817/files/DRS_horizontal_fullcolor.svg?v=1615332033 "
      />

      <meta
        name="twitter:image"
        content="https://cdn.shopify.com/s/files/1/0275/7784/3817/files/DRS_horizontal_fullcolor.svg?v=1615332033 "
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
