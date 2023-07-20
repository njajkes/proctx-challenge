<script setup lang="ts">
import { Form } from './control'
import { DisplayLists } from './display'
</script>

<template>
  <div class="w-full h-full flex flex-col sm:flex-row gap-8 ">
    <Form />
    <DisplayLists />
  </div>
</template>