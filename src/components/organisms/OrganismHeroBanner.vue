<template>
  <section :class="bannerClass">
    <AtomContainer :class="bannerInnerClass">
      <div class="flex flex-col gap-4 justify-center text-center md:text-left order-last md:order-first">
        <h1 class="text-4xl md:text-6xl leading-tight">{{ props.bannerTitle }}</h1>
        <p class="text-lg">{{ props.bannerDescription }}</p>
        <AtomButton :handle-click="buttonClickHandler" :class="'mx-auto md:mx-0'">{{ props.buttonText }}</AtomButton>
      </div>
      <AtomImage :src="props.bannerImageUrl" :class="'aspect-square self-center'" />
    </AtomContainer>
  </section>
</template>
<script lang="ts" setup>
import AtomContainer from '../atoms/AtomContainer.vue';
import AtomButton from '../atoms/AtomButton.vue';
import AtomImage from '../atoms/AtomImage.vue';

interface Props {
  buttonText?: string,
  buttonLink?: string,
  buttonClickHandler?: () => void,
  bannerTitle?: string,
  bannerDescription?: string,
  bannerImageUrl: string,
  bannerClass?: string,
  bannerInnerClass?: string,
}
const props = defineProps<Props>()

</script>