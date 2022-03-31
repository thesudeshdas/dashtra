export const filterCategories = (products, categories) =>
  categories.length > 0 ? products.filter((item) => item.categories.includes(categories)) : products;

export const filterBrand = (products, brands) =>
  brands.length > 0 ? products.filter((item) => brands.includes(item.brand)) : products;

export const filterProducts = (products, categories, brands) => {
  const categoriesFiltered = filterCategories(products, categories);
  const brandFiltered = filterBrand(categoriesFiltered, brands);

  return brandFiltered;
};
