<template>
  <div class="flex flex-col items-center justify-center px-[20px]">
    <div class="relative w-full mb-3 mt-[52px]" />
    <div class="flex flex-col w-full mt-[40px] text-center mb-6">
      <NuxtImg src="/icons/icon-illustration-404.svg" class="mx-auto" alt="" />
      <div class="my-3 font-semibold text-sm">Halaman Tidak Ditemukan</div>
      <div class="text-xs text-[#8A8A8E] dark:text-white italic">
        “Tunjukilah kami jalan yang lurus.” <br />
        (QS. Al-Fatihah: 6)
      </div>
      <NuxtLink
        href="/"
        class="bg-[#29A19C] p-3 mx-auto rounded-lg max-w-min text-xs font-medium text-white mt-4"
      >
        Kembali
      </NuxtLink>
    </div>
  </div>
</template>
