import { defineStore } from "pinia";
import { Color, Colors } from "../entities";
import { ref } from "vue";
import { Counter, Rgb } from "../../shared";
import { randColors } from "./rand-colors";

export const useColorsStore = defineStore("colors", () => {
  const counter = new Counter();

  const lists = ref<Colors[]>(
    Array.from({ length: 5 }, () => randColors(counter))
  );

  const getColor = (listId: Colors["id"], colorId: Color["id"]) => {
    const list = lists.value.find((el) => el.id === listId);
    const color = list?.items.find((el) => el.id === colorId);

    return color;
  };

  const decrementColor = (listId: Colors["id"], colorId: Color["id"]) => {
    const color = getColor(listId, colorId);

    if (!color) {
      return;
    }

    color.count = color.count - 1;
  };

  const changeColorCount = (
    listId: Colors["id"],
    colorId: Color["id"],
    value: Color["count"]
  ) => {
    const color = getColor(listId, colorId);
    if (value < 0 || !color) {
      return;
    }
    color.count = value;
  };

  const changeColorValue = (
    listId: Colors["id"],
    colorId: Color["id"],
    value: Color["color"]
  ) => {
    const color = getColor(listId, colorId);

    if (!color) {
      return;
    }

    color.color = value;
  };

  const toggleFilter = (listId: Colors["id"]) => {
    const list = lists.value.find((el) => el.id === listId);
    if (!list) return;
    list.filter = list.filter === "order" ? "shaked" : "order";
  };

  const toggleList = (listId: Colors["id"]) => {
    const list = lists.value.find((el) => el.id === listId);
    if (!list) return;
    list.checked = !list.checked;
    list.items.forEach((el) => {
      el.checked = true;
    });
  };

  const toggleColor = (listId: Colors["id"], colorId: Color["id"]) => {
    const color = getColor(listId, colorId);
    if (!color) return;
    color.checked = !color.checked;
  };

  const getListColors = (
    listId: Colors["id"]
  ): { id: number; color: Rgb; colorId: number }[][] => {
    const list = lists.value.find((el) => el.id === listId && el.checked);
    if (!list) return [[]];

    const ordered = list.items
      .filter((el) => el.checked)
      .map((el) =>
        Array.from({ length: el.count }, () => ({
          color: el.color,
          id: counter.Count,
          colorId: el.id,
        }))
      );

    switch (list.filter) {
      case "order":
        return ordered;
      case "shaked":
        const sequence: { id: number; color: Rgb; colorId: number }[] = [];
        ordered.forEach((v) => {
          sequence.push(...v);
        });

        sequence.sort(() => 0.5 - Math.random());

        return [sequence];
    }
  };

  const getList = (listId: number) => {
    const list = lists.value.find((el) => el.id === listId);

    return list;
  };

  return {
    lists,
    decrementColor,
    changeColorCount,
    changeColorValue,
    toggleFilter,
    getListColors,
    toggleList,
    toggleColor,
    getColor,
    getList,
  };
});
