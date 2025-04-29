<template>
  <LayoutHeader title="Quranku" />
  <main className="px-[20px] w-full">
    <HomeHeader />
    <HomeMenu />
  </main>
</template>

<script setup lang="ts">
import type { SurahInfo } from '~/types/SurahInfo'

const surahInfo = ref<SurahInfo[]>([])

const res = await import('@/data/surah-info.json')
surahInfo.value = res.surah_info
</script>
