<script setup lang="ts">
import { Colors } from '../../entities';
import { useColorsStore } from '../../lib';
import Item from './item.vue'

interface ListProps {
  list: Colors;
  index: number;
}

const { list, index } = defineProps<ListProps>()
const { toggleList } = useColorsStore()

</script>

<template>
  <div class="flex flex-col border-solid border-t-[1px] border-b-[1px] border-neutral-900 first:border-t-0 last:border-b-0 py-3">
    <label class="flex flex-row gap-3">
      <input type="checkbox" @change="() => toggleList(list.id)" />
      <p class="text-left text-xl font-bold">List {{ index + 1 }}</p>
    </label>
    <div class="w-full pl-10">
      <Item v-if="list.checked" :key="item.id" :list-id="list.id" :index="index" :color="item" v-for="(item, index) in list.items" />
    </div>
  </div>
</template>

<style scoped>
</style>