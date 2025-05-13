<template>
  <div>
    <div class="relative flex mb-6 drop-shadow-custom dark:drop-shadow-dark">
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
        pattern="[0-9]*"
        class="text-sm text-black dark:text-white bg-white dark:bg-[#3d3d3d] rounded-lg appearance-none focus:outline-none focus:shadow-outline pl-8 px-4 py-2 w-full"
        placeholder="Cari ayat (Contoh : 2)"
        @keypress="onlyNumber"
      />
    </div>
    <div
      v-for="(text, index) in filteredVerses"
      :id="(index + 1).toString()"
      :key="index"
      class="relative flex flex-col mb-5 px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark"
    >
      <div class="flex mb-2">
        <div
          class="flex-shrink-0 mr-5 my-auto rounded-full w-7 h-7 text-center border border-[#29A19C] text-xs text-[#29A19C] flex justify-center"
        >
          <span class="my-auto">{{ text }}</span>
        </div>
        <button class="ml-auto cursor-pointer" @click="setLastReadVerse(text)">
          <img
            src="/images/icon/bookmark.svg"
            width="24"
            height="24"
            alt=""
            style="max-width: 100%; height: auto"
          />
        </button>
      </div>
      <div class="my-auto">
        <div
          class="text-[#0C1517] dark:text-white text-2xl font-bold font-display arab mb-3 leading-[52px]"
        >
          {{ verse[text] }}
        </div>
        <div class="text-[#8A8A8E] dark:text-white text-xs leading-[18px]">
          {{ translations.id.text[text] }}
        </div>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="fixed w-fit left-1/2 -translate-x-1/2 translate-y-1/2 bottom-[50px] transition duration-300 text-white bg-[#29A19C] rounded-md px-5 py-4 z-50"
    >
      <div class="flex items-center space-x-2">
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <p class="font-semibold text-sm whitespace-nowrap">Berhasil menyimpan bacaan</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import storageKey from '@/constant/storage-key'
import { setItem } from '@/utils/storage'
import type { Surah } from '@/types/Surah'

const props = defineProps<{
  numberSurah: string
  surah: Surah
  verse: Record<string, string>
  translations: {
    id: {
      name: string
      text: Record<string, string>
    }
  }
}>()

const query = ref('')
const isOpen = ref(false)

const filteredVerses = computed(() =>
  Object.keys(props.verse).filter((text) => {
    if (query.value === '') return true
    return text.includes(query.value)
  })
)

function onlyNumber(e: KeyboardEvent) {
  if (!/[0-9]/.test(e.key)) e.preventDefault()
}

function setLastReadVerse(text: string) {
  const data = {
    numberSurah: props.numberSurah,
    surah: props.surah,
    verse: text
  }
  setItem(storageKey.LAST_READ, data, storageKey.VERSION)
  isOpen.value = true
}

watch(isOpen, (val) => {
  if (val) {
    setTimeout(() => {
      isOpen.value = false
    }, 3000)
  }
})
</script>
