<script setup lang="ts">
import { useColorsStore } from '../../lib';
import DisplayList from './display-list.vue';

const { lists } = useColorsStore()

</script>

<template>
<div class="flex flex-col w-full gap-3">
  <DisplayList v-for="(list, index) in lists" :index="index" :id="list.id" />
</div>
</template>