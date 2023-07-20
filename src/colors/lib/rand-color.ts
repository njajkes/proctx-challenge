import { Counter, getRandomInt, randRgb } from "../../shared";
import { Color } from "../entities";

export const randColor = (counter: Counter): Color => {
  return {
    id: counter.Count,
    checked: false,
    count: getRandomInt(1, 100),
    color: randRgb(),
  };
};
