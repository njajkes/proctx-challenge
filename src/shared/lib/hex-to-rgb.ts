import { Rgb } from "../entities";

export const hexToRgb = (hex: string): Rgb => {
  const values = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    ?.map((x) => parseInt(x, 16));

  if (!values) return "rgb(0,0,0)";

  return `rgb(${values[0]},${values[1]},${values[2]})`;
};
