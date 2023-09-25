interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Asus", price: 34, category: "Electronic" },
  { id: 5, name: "Benq", price: 21, category: "Electronic" },
  { id: 6, name: "Hp", price: 22, category: "Electronic" },
  { id: 7, name: "Acer", price: 22, category: "Electronic" },
  { id: 2, name: "Mouse", price: 123, category: "Equipments" },
  { id: 15, name: "Logi", price: 12, category: "Equipments" },
  { id: 12, name: "Zowie", price: 3, category: "Equipments" },
  { id: 11, name: "Glorious", price: 44, category: "Equipments" },
  { id: 3, name: "Crem", price: 80, category: "Care" },
];

function filterProducts(products: Product[], category?: string, minPrice?: number, maxPrice?: number, productName?: string): Product[] {
  let filteredProducts: Product[] = [];

  for (const item of products) {
    let shouldAdd = true;

    if (category && item.category !== category) {
      shouldAdd = false;
    }

    if (productName && item.name !== productName) {
      shouldAdd = false;
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      if (minPrice > item.price || maxPrice < item.price) {
        shouldAdd = false;
      }
    }

    if (shouldAdd) filteredProducts.push(item);
  }

  return filteredProducts;
}

console.log(filterProducts(products, "Electronic", 10, 5000, "Benq"));
