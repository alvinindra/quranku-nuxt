<template>
  <button
    v-if="showButton"
    class="fixed p-3 cursor-pointer rounded-full bottom-5 right-5 text-lg bg-[#29A19C] drop-shadow-custom dark:drop-shadow-dark"
    @click="scrollToTop"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 11H11V21H13V11H16L12 7L8 11ZM4 3V5H20V3H4Z" fill="white" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

function handleScroll() {
  showButton.value = window.pageYOffset > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
