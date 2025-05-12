<template>
  <div>
    <LayoutHeader :is-fixed="true" :is-back="true" title="Dzikir Pagi" />
    <div class="flex flex-col items-center justify-center px-[20px]">
      <div class="flex flex-col relative w-full mt-[76px]">
        <div
          v-for="(item, indexDoa) in dzikirPagi"
          :key="indexDoa"
          class="relative flex flex-col mb-5 px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark"
        >
          <div v-if="item.title" class="flex mb-2">
            <div
              class="flex-shrink-0 mr-5 my-auto text-center text-xs text-[#29A19C] flex justify-center truncate"
            >
              {{ item.title }}
            </div>
          </div>
          <div class="my-auto">
            <div
              class="text-[#0C1517] dark:text-white text-2xl font-bold font-display arab mb-3 leading-[52px]"
            >
              {{ item.arabic }}
            </div>
            <div class="text-[#8A8A8E] dark:text-white text-xs leading-[18px]">
              {{ item.translation }}
            </div>
            <div
              class="text-[#81818B] mt-2 font-medium dark:text-white text-[11px] leading-[14px]"
            >
              <span v-for="(line, lineIndex) in item.source.split('\n')" :key="lineIndex">
                {{ line }}<br v-if="lineIndex < item.source.split('\n').length - 1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DzikirItem } from '@/types/DoaInfo'

useHead({
  title: 'Dzikir Pagi - Quranku'
})

const dzikirPagi = ref<DzikirItem[]>([])

onMounted(async () => {
  const res = await import('@/data/dzikir-pagi.json')
  dzikirPagi.value = res.dzikir_pagi
})
</script>
