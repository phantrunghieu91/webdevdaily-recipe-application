<script setup lang="ts">
import AtomIconClock from '../atoms/AtomIconClock.vue';
import AtomIconFire from '../atoms/AtomIconFire.vue';
import AtomIconStar from '../atoms/AtomIconStar.vue';
import type { RecipeMetaIconType } from '@/types';

interface Props {
  icon: RecipeMetaIconType
  text: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="flex items-center gap-1">
    <template v-if="props.icon === 'clock'">
      <AtomIconClock />
    </template>
    <template v-else-if="props.icon === 'fire'">
      <AtomIconFire />
    </template>
    <template v-else-if="props.icon === 'star'">
      <AtomIconStar />
    </template>
    <span>{{ props.text }}</span>
  </div>
</template>