<script lang="ts" setup>
import AtomSectionTitle from '../atoms/AtomSectionTitle.vue';

interface Props {
  title: string,
  desc?: string
}

const props = defineProps<Props>()
</script>
<template>
  <header class="mb-8">
    <AtomSectionTitle :title="title" />
    <p v-if="desc !== undefined">{{ desc }}</p>
  </header>
</template>