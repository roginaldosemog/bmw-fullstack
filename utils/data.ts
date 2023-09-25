export const isDataEmpty = (value: any): boolean =>
  !Array.isArray(value) || value.length < 1 || !value
