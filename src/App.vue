<script setup lang="ts">
import { iconClass } from './testClasses'
import testClasses from './testClasses.json'
</script>

<template>
  <main class="text-center py-10">
    <h1 class="text-3xl font-bold">Hello world!</h1>
    <span class="iconify size-52 text-purple-600" :class="iconClass"></span>
    <span class="iconify size-52 text-purple-600" :class="testClasses.testClass"></span>
  </main>
</template>
