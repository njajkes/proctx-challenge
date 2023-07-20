<script setup lang="ts">
import { Rgb } from '../../../shared';
import { useColorsStore } from '../../lib';

interface DisplayDotProps {
  id: number
  color: Rgb
  colorId: number
  listId: number
}

const props = defineProps<DisplayDotProps>()
const { decrementColor } = useColorsStore()
</script>

<template>
  <div 
    @click="() => decrementColor(listId, colorId)" 
    class="w-[20px] relative h-[20px] cursor-pointer hover:before:absolute hover:before:inset-[-2px] hover:before:content-['X']" 
    :style="{
      background: props.color
  }"/>
</template>