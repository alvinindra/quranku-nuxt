<template>
  <LayoutHeader title="Quranku" />
  <main className="w-full" style="padding: 0 20px">
    <ClientOnly>
      <HomeHeader />
    </ClientOnly>
    <HomeMenu />
    <HomeListSurah :surah-info="surahInfo" />
  </main>
</template>

<script setup lang="ts">
import type { SurahInfo } from '~/types/SurahInfo'

useHead({
  title: 'Quranku'
})

const surahInfo = ref<SurahInfo[]>([])

const res = await import('@/data/surah-info.json')
surahInfo.value = res.surah_info
</script>
