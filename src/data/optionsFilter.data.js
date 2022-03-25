export const optionsFilterData = {
  id: 'op001',
  description:
    'All the options that will be show in the app curated in one place',
  filters: [
    {
      category: 'Rating',
      options: [0, 1, 2, 3, 4],
    },
    {
      category: 'Categories',
      options: ['Football', 'Accessories', 'Fitness', 'Clothing'],
    },
    {
      category: 'Brands',
      options: ['Nike', 'Nivia', 'Puma', 'Adidas'],
    },
    {
      category: 'Price',
      options: 0,
    },
    {
      category: 'Availability',
      options: ['Include out of stock', 'Fast delivery only'],
    },
  ],
};
