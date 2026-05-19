export async function getProducts() {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
