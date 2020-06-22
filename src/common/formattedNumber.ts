export const formattedNumber = (number: number | string) =>
  number ? String(number).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : undefined;
