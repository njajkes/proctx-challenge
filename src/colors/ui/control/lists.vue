<script setup lang="ts">
import List from './list.vue'
import { useColorsStore } from '../../lib';

const { lists } = useColorsStore()
</script>

<template>
  <div class="flex flex-col  bg-neutral-700 px-4 py-2 overflow-auto w-full sm:w-1/3 min-h-full h-full">
    <List :list="list" :key="list.id" :index="index" v-for="(list, index) in lists"  />
  </div>
</template>

<style scoped>
</style>