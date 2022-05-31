export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'relevance':
      return products.sort((a, b) => products.indexOf(b) - products.indexOf(a));

    case 'price-low-to-high':
      return products.sort((a, b) => a.price.discounted - b.price.discounted);

    case 'price-high-to-low':
      return products.sort((a, b) => b.price.discounted - a.price.discounted);

    default:
      return products;
  }
};
