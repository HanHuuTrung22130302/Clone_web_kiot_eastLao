const mockProducts = [
  { name: "Cà phê đen", sku: "CF-001", price: 25000 },
  { name: "Cà phê sữa", sku: "CF-002", price: 30000 },
  { name: "Trà đào", sku: "TR-001", price: 28000 },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
}

function renderProducts(products) {
  const tableBody = document.getElementById("product-table-body");
  if (!tableBody) return;

  tableBody.innerHTML = products
    .map(
      (product) =>
        `<tr>
          <td>${product.name}</td>
          <td>${product.sku}</td>
          <td>${formatCurrency(product.price)}</td>
        </tr>`
    )
    .join("");
}

renderProducts(mockProducts);
