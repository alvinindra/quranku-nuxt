<template>
  <div
    class="relative w-full"
    :class="{ 'cursor-pointer': hasCache }"
    @click="gotoLastRead"
  >
    <div class="absolute z-10 left-5 top-5">
      <div class="flex mb-6">
        <img
          class="rounded-lg max-w-[20px]"
          src="/images/icon/lastread.svg"
          width="20"
          height="20"
          alt=""
        />
        <div class="text-sm ml-2 text-white">Terakhir Dibaca</div>
      </div>
      <template v-if="hasCache">
        <div class="font-bold text-base mb-[3px] text-white">
          {{ cacheLastRead?.surah?.name_latin }}
        </div>
        <div class="text-xs text-white">Ayat {{ cacheLastRead.verse }}</div>
      </template>
      <template v-else>
        <div class="font-bold text-base mb-[3px] text-white">
          <div>Ayo baca</div>
          <div>Al-Quran</div>
        </div>
      </template>
    </div>
    <img
      class="rounded-lg w-full"
      src="/images/bg-lastread.svg"
      width="320"
      height="130"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import storageKey from '@/constant/storage-key'
import { getItem } from '@/utils/storage'

const router = useRouter()
const cacheLastRead = ref<any>({})
const hasCache = computed(() => Object.keys(cacheLastRead.value).length > 0)

onMounted(() => {
  cacheLastRead.value = getItem(storageKey.LAST_READ, storageKey.VERSION) || {}
})

function gotoLastRead() {
  if (hasCache.value) {
    router.push(`/surah/${cacheLastRead.value.numberSurah}#${cacheLastRead.value.verse}`)
  }
}
</script>
