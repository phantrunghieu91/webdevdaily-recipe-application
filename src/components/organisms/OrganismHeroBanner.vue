<template>
  <section :class="bannerClass">
    <AtomContainer :class="bannerInnerClass">
      <div class="flex flex-col gap-4 justify-center">
        <h1 class="text-5xl md:text-6xl leading-tight">{{ props.bannerTitle }}</h1>
        <p class="text-lg">{{ props.bannerDescription }}</p>
        <AtomButton :handle-click="buttonClickHandler">{{ props.buttonText }}</AtomButton>
      </div>
      <div>
        <img :src="props.bannerImageUrl" loading="lazy" class="w-full aspect-square object-cover"/>
      </div>
    </AtomContainer>
  </section>
</template>
<script lang="ts" setup>
import AtomContainer from '../atoms/AtomContainer.vue';
import AtomButton from '../atoms/AtomButton.vue';

interface Props {
  buttonText?: string,
  buttonLink?: string,
  buttonClickHandler?: () => void,
  bannerTitle?: string,
  bannerDescription?: string,
  bannerImageUrl?: string,
  bannerClass?: string,
  bannerInnerClass?: string,
}
const props = defineProps<Props>()

</script>