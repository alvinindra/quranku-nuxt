<template>
  <div>
    <LayoutHeader :is-fixed="true" :is-back="true" title="Segera Hadir" />
    <div class="flex flex-col items-center justify-center px-[20px]">
      <div class="relative w-full mb-3 mt-[52px]"></div>
      <div class="flex flex-col w-full mt-[40px] text-center mb-6">
        <img
          src="/icons/icon-illustration-comingsoon.svg"
          alt=""
          class="mx-auto fill-white dark:fill-transparent"
        />
        <div class="my-3 font-semibold text-sm">Fitur Ini Segera Hadir</div>
        <div class="text-xs text-[#8A8A8E] dark:text-white">
          Doakan kami untuk menyelesaikan fitur ini. <br />
          Terima kasih.
        </div>
        <NuxtLink
          to="/"
          class="bg-[#29A19C] p-3 mx-auto rounded-lg max-w-min text-xs font-medium text-white mt-4"
        >
          Kembali
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
