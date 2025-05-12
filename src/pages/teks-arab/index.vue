<template>
  <div>
    <Header :is-fixed="true" :is-back="true" title="Teks Arab" />
    <TeksArabList :teks-arab="teksArab" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import TeksArabList from '@/components/TeksArabList.vue'
import type { TeksArabItem } from '@/types/DoaInfo'

useHead({
  title: 'Teks Arab - Quranku'
})

const teksArab = ref<TeksArabItem[]>([])

onMounted(async () => {
  const res = await import('@/data/teks-arab.json')
  teksArab.value = res.teks_arab
})
</script>
