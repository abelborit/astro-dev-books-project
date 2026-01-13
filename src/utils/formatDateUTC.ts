/**
 * Formatea una fecha a "dd/mm/yyyy" en UTC.
 * @param date Fecha a formatear (Date)
 * @returns string con formato "dd/mm/yyyy"
 */
export const formatDateUTC = (date: Date): string => {
  /* se está usando "getUTCDate()" - "getUTCMonth()" - "getUTCFullYear()" para obtener la fecha real del Markdown porque usar los métodos "getDate()" - "getMonth()" - "getFullYear()" de JavaScript usan la fecha en la zona horaria local del servidor, pero Astro parsea las fechas en UTC (por ejemplo, 2024-04-22T00:00:00.000Z es medianoche UTC). Si tu zona horaria está detrás de UTC (por ejemplo, UTC-6), el método "getDate()" puede devolver el día anterior */
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};
