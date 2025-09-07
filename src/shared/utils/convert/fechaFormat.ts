export const formatDate = (fechaUTC?: string | null): string => {
  if (!fechaUTC) return "Fecha no disponible";

  const date = new Date(fechaUTC);

  if (isNaN(date.getTime())) {
    return "Fecha inválida";
  }

  return new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};
