export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'relevance':
      return products.sort((a, b) => products.indexOf(a) - products.indexOf(b));

    case 'price-low-to-high':
      return products.sort((a, b) => a.price.discounted - b.price.discounted);

    case 'price-high-to-low':
      return products.sort((a, b) => b.price.discounted - a.price.discounted);

    case 'rating-low-to-high':
      return products.sort((a, b) => a.rating.stars - b.rating.stars);

    case 'rating-high-to-low':
      return products.sort((a, b) => b.rating.stars - a.rating.stars);

    default:
      return products;
  }
};
