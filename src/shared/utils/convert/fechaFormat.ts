export const fechaFormat = (
  isoDate: string,
  locale: string = "es-CO",
  timeZone: string = "America/Bogota"
): string => {
  if (!isoDate) return "";

  // Asegurar que se interprete como UTC (útil si el backend no incluye 'Z')
  const date = new Date(isoDate.includes('Z') ? isoDate : `${isoDate}Z`);

  return date.toLocaleString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone, // Forzar zona horaria de Bogotá (UTC-5)
  });
};  