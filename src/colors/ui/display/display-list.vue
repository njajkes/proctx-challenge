<script setup lang="ts">
import { computed } from 'vue';
import { useColorsStore } from '../../lib';
import DisplayDot from './display-dot.vue';

interface DisplayListProps {
  id: number
  index: number
}

const { id } = defineProps<DisplayListProps>()

const { getListColors, toggleFilter, getList } = useColorsStore()
const dotList = computed(() => getListColors(id))
const list = computed(() => getList(id))


</script>

<template>
<div class="flex flex-col gap-4 border-[2px] border-solid border-neutral-900 px-3 py-6">
  <div class="flex flex-row justify-between">
    <p class="font-bold text-xl">List {{ index + 1 }}</p>
    <button v-if="list?.checked" @click="() => toggleFilter(id)">{{ list?.filter === 'order' ? 'Shake' : 'Sort' }}</button>
  </div>
  <div v-for="(sections, index) in dotList" class="flex flex-row flex-wrap gap-1" :key="index">
    <DisplayDot v-for="dots in sections" :id="dots.id" :color="dots.color" :list-id="id" :color-id="dots.colorId" :key="dots.id"/>
  </div>
</div>
</template>