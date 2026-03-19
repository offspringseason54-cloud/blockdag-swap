<template>
  <div>
    <h3 class="text-gray-900 font-bold text-base mb-2">{{ question }}</h3>
    <p class="text-gray-600 text-sm leading-relaxed" v-html="answer" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()
</script>