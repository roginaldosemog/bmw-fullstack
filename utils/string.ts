export const capitalize = (text: string) =>
  text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
