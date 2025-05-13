<template>
  <LayoutHeader title="Quranku" />
  <main className="w-full" style="padding: 0 20px">
    <HomeHeader />
    <HomeMenu />
    <HomeListSurah :surah-info="surahInfo" />
    <HomeScrollToTop />
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
