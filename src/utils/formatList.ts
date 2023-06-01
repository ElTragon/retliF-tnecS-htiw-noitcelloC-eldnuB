export default function formatList(products: string[]): string {
  const productCountMap: { [key: string]: number } = {};
  const formattedProducts: string[] = [];

  products.forEach((product) => {
    productCountMap[product] = (productCountMap[product] || 0) + 1;
  });

  for (const product in productCountMap) {
    formattedProducts.push(
      productCountMap[product] > 1
        ? `${product} x ${productCountMap[product]}`
        : product
    );
  }

  const lastProduct = formattedProducts.pop() || "";
  return formattedProducts.length > 0
    ? `${formattedProducts.join(", ")}, and ${lastProduct}`
    : lastProduct;
}
