<template>
  <NuxtLink
    :to="`/surah/${item.index}`"
    class="relative flex mb-5 px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark cursor-pointer"
  >
    <div
      class="mr-5 my-auto rounded-full w-6 h-6 text-center border border-[#29A19C] text-xs text-[#29A19C] flex justify-center"
    >
      <span class="my-auto">{{ item.index }}</span>
    </div>
    <div class="my-auto">
      <div class="text-[#29A19C] font-semibold">{{ item.latin }}</div>
      <div class="text-[#8A8A8E] dark:text-white text-xs">
        {{ item.translation }}, {{ item.ayah_count }} ayat
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { SurahInfo } from '@/types/SurahInfo'

defineProps<{
  item: SurahInfo
}>()
</script>
