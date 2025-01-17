<script lang="ts" setup>
const props = defineProps<{
  title: string,
  align?: 'left' | 'center' | 'right'
}>()
const align = props.align ?? 'left'
const classes = `text-2xl capitalize text-${align}`
</script>
<template>
  <h2 :class="classes">{{ title }}</h2>
</template>