import { Counter, getRandomInt } from "../../shared";
import { Colors } from "../entities";
import { randColor } from "./rand-color";

export const randColors = (counter: Counter): Colors => {
  return {
    id: counter.Count,
    filter: "order",
    checked: false,
    items: Array.from({ length: getRandomInt(4, 10) }, () =>
      randColor(counter)
    ),
  };
};
