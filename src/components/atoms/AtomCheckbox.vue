<template>
  <label class="flex items-center gap-x-2 cursor-pointer">
    <input type="checkbox" :name="name" class="hidden" v-model="checkedState"/>
    <span :class="boxClasses"></span>
    <span :class="textClasses"><slot /></span>
  </label>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  name?: string
  checked?: boolean
  boxStyle?: 'square' | 'round'
}>()

const checkedState = ref(props.checked ?? false)

const boxStyle = props.boxStyle ?? 'round'
const boxClasses = computed(() => {
  return [
    'w-5 h-5 border border-primary grid place-items-center',
    'before:w-3 before:h-3 before:bg-primary before:transition-opacity before:duration-300 before:opacity-0',
    boxStyle === 'square' ? '' : 'rounded-full before:rounded-full',
    checkedState.value ? 'before:opacity-100' : '',
  ]
});
const textClasses = computed(() => {
  return [
    checkedState.value ? 'line-through' : ''
  ]
})
</script>