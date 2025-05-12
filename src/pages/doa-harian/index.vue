<template>
  <div>
    <LayoutHeader :is-fixed="true" :is-back="true" title="Doa Harian" />
    <div class="flex flex-col items-center justify-center px-[20px]">
      <div class="relative w-full mb-3 mt-[52px]"></div>
      <div class="flex flex-col w-full mb-6">
        <NuxtLink
          v-for="item in doaInfo"
          :key="item.slug"
          class="mb-3"
          :to="`/doa-harian/${item.slug}`"
        >
          <div
            style="justify-content: space-between"
            class="relative flex px-3 py-4 items-center bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark cursor-pointer"
          >
            <div class="me-auto text-xs font-medium">{{ item.title }}</div>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1011_49)">
                <path
                  d="M2.99996 10.265L3.88496 11.15L8.83496 6.20002L3.88496 1.25002L2.99996 2.13502L7.06496 6.20002L2.99996 10.265Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1011_49">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DoaInfo } from '@/types/DoaInfo'

const doaInfo = ref<DoaInfo[]>([])

onMounted(async () => {
  const res = await import('@/data/doa-info.json')
  doaInfo.value = res.doa_info
})
</script>
