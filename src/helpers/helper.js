const shortenText = text => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProduct = products.filter(p =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProduct;
};

const filterProducts = (products, category) => {
  if (!category) return products;

  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category
  );
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    // eslint-disable-next-line no-unused-vars
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.search === "") {
    // eslint-disable-next-line no-unused-vars
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = searchParams => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};

const sumProducts = products => {
  const itemCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);

  return { itemCounter, total };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex(item => item.id === id);
  const quantity = index === -1 ? 0 : state.selectedItems[index].quantity;

  return quantity;
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};
