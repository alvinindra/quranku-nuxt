<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

const title = 'Quranku'
const description = 'Baca Al-Quran dengan ayat terjemahan Bahasa Indonesia'

useHead({
  title,
  titleTemplate: '%s',
  htmlAttrs: { lang: 'id' },
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'Al-Quran, Quran, Quran Indonesia, Quranku' },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: 'Quranku' },
    { property: 'og:image', content: '/images/cover-quranku.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@quranku' },
    { name: 'twitter:creator', content: '@quranku' },
    { name: 'twitter:image', content: '/images/cover-quranku.jpg' },
    {
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    { name: 'author', content: 'Quranku' }
  ],
  link: [{ rel: 'icon', href: '/favicon.svg' }]
})
</script>
