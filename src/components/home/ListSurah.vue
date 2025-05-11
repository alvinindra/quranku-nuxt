<template>
  <div>
    <div class="relative flex my-6 drop-shadow-custom dark:drop-shadow-dark">
      <svg
        class="flex absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        ></path>
      </svg>
      <input
        v-model="query"
        type="text"
        class="text-sm text-black dark:text-white rounded-lg appearance-none focus:outline-none focus:shadow-outline pl-8 px-4 py-2 w-full bg-white dark:bg-[#3D3D3D]"
        placeholder="Cari surat"
      />
    </div>
    <div class="flex flex-col relative">
      <Surah v-for="item in filteredSurah" :key="item.index" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Surah from '../Surah.vue'
import type { SurahInfo } from '@/types/SurahInfo'

const props = defineProps<{
  surahInfo: SurahInfo[]
}>()

const query = ref('')

const filteredSurah = computed(() =>
  props.surahInfo.filter((item) =>
    query.value === ''
      ? true
      : item.latin.toLowerCase().includes(query.value.toLowerCase())
  )
)
</script>
