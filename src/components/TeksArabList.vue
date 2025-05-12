<template>
  <div class="flex flex-col items-center justify-center px-[20px]">
    <div class="flex flex-col relative w-full mt-[76px]">
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
          class="text-sm text-black dark:text-white rounded-lg appearance-none focus:outline-none focus:shadow-outline pl-8 px-4 py-2 w-full bg-white dark:bg-[#3D3D3D]"
          placeholder="Cari teks"
        />
      </div>

      <div
        v-for="(item, index) in filteredTeksArab"
        :key="index"
        class="relative flex flex-col mb-5 px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark cursor-pointer overflow-hidden"
        @click="handleCardClick(item)"
      >
        <div class="my-auto">
          <div
            class="text-[#0C1517] dark:text-white text-2xl font-bold font-display arab mb-3 leading-[52px]"
          >
            {{ item.arabic }}
          </div>
          <div class="font-normal text-xs mb-[3px] dark:text-white">
            {{ item.latin }}
          </div>
          <div
            class="text-[#333333] text-balance font-bold dark:text-white text-xs leading-[18px]"
          >
            {{ item.translation }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeksArabItem } from '@/types/DoaInfo'

const props = defineProps<{
  teksArab: TeksArabItem[]
}>()

const query = ref('')
const showToast = ref(false)
const colorMode = useColorMode()

const filteredTeksArab = computed(() =>
  props.teksArab.filter((item) =>
    query.value === ''
      ? true
      : item.latin.toLowerCase().includes(query.value.toLowerCase()) ||
        item.translation.toLowerCase().includes(query.value.toLowerCase())
  )
)

function handleCardClick(item: TeksArabItem) {
  const text = `${item.arabic}\n${item.latin}\n${item.translation}`
  navigator.clipboard.writeText(text).then(() => {
    useToastify.success('Berhasil disalin!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      progress: undefined,
      theme: colorMode.preference === 'dark' ? 'dark' : 'light'
    })
  })
}

watch(showToast, (val) => {
  if (val) {
    setTimeout(() => {
      showToast.value = false
    }, 2000)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
