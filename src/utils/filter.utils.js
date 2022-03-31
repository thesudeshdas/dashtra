export const filterCategories = (products, categories) =>
  categories.length > 0
    ? products.filter((item) => item.categories.includes(categories))
    : products;

export const filterBrand = (products, brands) =>
  brands.length > 0
    ? products.filter((item) => brands.includes(item.brand))
    : products;
    
export const filterPrice = (products, price) => 
  products.filter(item => item.price.discounted <= price)


export const filterProducts = (products, categories, brands, price) => {
  const categoriesFiltered = filterCategories(products, categories);
  const brandFiltered = filterBrand(categoriesFiltered, brands);
  const priceFitlered = filterPrice(brandFiltered, price)

  return priceFitlered;
};
