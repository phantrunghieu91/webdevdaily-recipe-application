<script setup lang="ts">
import AtomLogo from '@/components/atoms/AtomLogo.vue'
import AtomContainer from '../atoms/AtomContainer.vue';
import { RouterLink } from 'vue-router'

</script>
<template>
  <header class="border-b border-gray-200">
    <AtomContainer :class="'py-4 flex items-center justify-between'">
      <AtomLogo />
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </AtomContainer>
  </header>
</template>