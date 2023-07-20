import { getRandomInt } from "./get-random-int";
import { type Rgb } from "../entities";

export const randRgb = (): Rgb =>
  `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(
    0,
    255
  )})`;
