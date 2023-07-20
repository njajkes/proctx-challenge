import { Rgb } from "../entities";

const componentToHex = (c: number) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbToHex = (rgb: Rgb) => {
  const parsed = rgb
    .split("(")[1]
    .split(")")[0]
    .split(",")
    .map((el) => +el);

  return (
    "#" +
    componentToHex(parsed[0]) +
    componentToHex(parsed[1]) +
    componentToHex(parsed[2])
  );
};
