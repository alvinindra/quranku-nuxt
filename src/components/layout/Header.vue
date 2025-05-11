<template>
  <header
    :class="
      cn(
        'w-full flex bg-white dark:bg-[#333333] h-[52px] px-5 py-[14px] mb-[2px] z-10',
        isFixed ? 'fixed shadow-md dark:drop-shadow-dark left-0' : 'relative'
      )
    "
  >
    <button v-if="isBack" class="relative" @click="handleClick">
      <svg
        class="fill-[#0C1517] dark:fill-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_915_104)">
          <path
            d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_915_104">
            <rect width="24" height="24" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </button>
    <div class="mx-auto">
      <div
        class="absolute left-[50%] translate-x-[-50%] text-base font-bold text-black dark:text-white line-clamp-1 text-nowrap"
      >
        {{ title }}
      </div>
    </div>
    <ToggleDarkMode />
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { cn } from '@/lib/utils'

defineProps({
  title: {
    type: String,
    default: ''
  },
  isBack: {
    type: Boolean
  },
  isFixed: Boolean
})

const router = useRouter()

function handleClick() {
  router.back()
}
</script>
