<template>
  <div
    class="relative flex justify-around my-5 px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark cursor-pointer"
  >
    <NuxtLink
      v-for="item in listMenu"
      :key="item.name"
      :href="item?.url"
      class="flex text-center flex-col"
    >
      <div class="mx-auto">
        <NuxtImg width="24" height="24" :src="item?.icon" alt="" />
      </div>
      <div
        class="text-[11px] whitespace-normal max-w-[51px] leading-3 mt-1 text-[#29A19C]"
      >
        {{ item?.name }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import IconDoaHarian from '/icons/icon-doa-harian.svg'
import IconDzikirPagi from '/icons/icon-dzikir-pagi.svg'
import IconDzikirPetang from '/icons/icon-dzikir-petang.svg'
import IconTeksArab from '/icons/icon-teks-arab.svg'

const listMenu = [
  {
    name: 'Doa Harian',
    icon: IconDoaHarian,
    url: '/doa-harian'
  },
  {
    name: 'Dzikir Pagi',
    icon: IconDzikirPagi,
    url: '/dzikir-pagi'
  },
  {
    name: 'Dzikir Petang',
    icon: IconDzikirPetang,
    url: '/dzikir-petang'
  },
  {
    name: 'Teks Arab',
    icon: IconTeksArab,
    url: '/teks-arab'
  }
]
</script>
