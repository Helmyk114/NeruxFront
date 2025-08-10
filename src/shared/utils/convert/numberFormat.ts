export function formatPrice(value: number | string): string {
  const number = typeof value === "string" ? parseFloat(value) : value;

  return number.toLocaleString("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
