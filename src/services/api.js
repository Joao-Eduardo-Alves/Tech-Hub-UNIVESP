let productsCache = null;

export async function getProducts() {
  if (productsCache) {
    return productsCache;
  }

  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  productsCache = await response.json();
  return productsCache;
}

export function clearProductsCache() {
  productsCache = null;
}
