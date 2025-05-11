<template>
  <button class="cursor-pointer" @click="toggleTheme">
    <img
      :src="
        colorMode.value === 'dark'
          ? '/images/icon/dark-theme.svg'
          : '/images/icon/light-theme.svg'
      "
      width="24"
      height="24"
      alt="Toggle Theme"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>
