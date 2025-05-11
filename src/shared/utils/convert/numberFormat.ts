export const numberFormat = (
  value: string | number,
  locale: string = 'es-CO',
  currency: string = 'COP'
): string => {
  if (value === null || value === undefined || value === '') return '$0';

  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numberValue)) return '$0';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(numberValue);
};
