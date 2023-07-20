import { Color } from "./color";

export interface Colors {
  id: number;
  items: Color[];
  filter: "order" | "shaked";
  checked: boolean;
}
