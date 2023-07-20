<script setup lang="ts">
import { computed } from 'vue';
import { Color, Colors } from '../../entities'
import { useColorsStore } from '../../lib'
import { hexToRgb, rgbToHex } from '../../../shared';

interface ItemProps {
  index: number;
  color: Color;
  listId: Colors["id"];
}

const { index, color, listId } = defineProps<ItemProps>()
const { getColor, toggleColor, changeColorCount, changeColorValue } = useColorsStore()
const _color = getColor(listId, color.id)!

const onInput = (e: Event) => {
  const t = e.target as HTMLInputElement
  const newValue = +t.value

  if (isNaN(newValue) || !isFinite(newValue) || newValue < 0) {
    t.value = "" + _color.count
    return;
  }

  changeColorCount(listId, _color.id, newValue)
}

const onColorChange = (e: Event) => {
  const t = e.target as HTMLInputElement
  const newValue = t.value

  changeColorValue(listId, _color.id, hexToRgb(newValue))
}

const hexColor = computed(() => {
  return rgbToHex(_color.color)
})

</script>

<template>
  <div class="flex flex-row w-full items-center gap-3 font-light text-lg">
    <label class="flex flex-row basis-[80%] gap-3">
      <input type="checkbox" :checked="color.checked" @change="() => toggleColor(listId, _color.id)" />
      <p>
        Item {{ index + 1 }}
      </p>
    </label>
    <div class="flex flex-row">
      <input class="w-[3rem] bg-transparent" type="number" :value="_color.count" @input="onInput" />
      <input type="color" :value="hexColor" @change="onColorChange" />
    </div>
  </div>
</template>

<style scoped>

</style>