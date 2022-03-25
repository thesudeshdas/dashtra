export const filterCategories = (arr, str) =>
  str.length > 0 ? arr.filter((item) => item.categories.includes(str)) : arr;

export const filterBrand = (arr, list) =>
  list.length > 0 ? arr.filter((item) => list.includes(item.brand)) : arr;

export const filterProducts = (arr, categories, brands) => {
  const categoriesFiltered = filterCategories(arr, categories);
  const brandFiltered = filterBrand(categoriesFiltered, brands);

  return brandFiltered;
};

// TODO - Naming of the variables for the functions