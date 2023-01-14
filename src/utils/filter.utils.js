export const filterCategories = (products, categories) =>
  categories.length > 0
    ? products.filter((item) => item.categories.includes(categories))
    : products;

export const filterBrands = (products, brands) =>
  brands.length > 0
    ? products.filter((item) => brands.includes(item.brand.toLowerCase()))
    : products;

export const filterPrice = (products, price) =>
  products.filter((item) => item.price.discounted <= price);

export const filterRatings = (products, rating) =>
  products.filter((item) => item.rating.stars >= rating);

export const filterProducts = (products, categories, brands, price, rating) => {
  // console.log([...brands.toLowerCase(0)]);
  
  const categoriesFiltered = filterCategories(products, categories);
  const brandFiltered = filterBrands(categoriesFiltered, brands);
  const priceFitlered = filterPrice(brandFiltered, price);
  const ratingFiltered = filterRatings(priceFitlered, rating)

  return ratingFiltered;
};
