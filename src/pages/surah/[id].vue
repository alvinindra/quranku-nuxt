<template>
  <div>
    <LayoutHeader :is-fixed="true" :is-back="true" :title="surah?.name_latin" />
    <div class="flex flex-col items-center justify-center px-[20px]">
      <div class="relative w-full mb-6 mt-[68px]">
        <div
          class="bg-detailsurah pt-4 pb-3"
          style="
            background: linear-gradient(135deg, #29a19c 0%, #5ec4bf 100%);
            border-radius: 8px;
          "
        >
          <div class="text-center align-middle">
            <div class="font-bold text-xl mb-[3px] text-white">
              {{ surah?.name_latin }}
            </div>
            <div class="text-xs text-white mb-[10px]">
              {{ surah?.translations.id.name }}, {{ surah?.number_of_ayah }} ayat
            </div>
            <template v-if="isSpecial">
              <hr class="w-[220px] mx-auto mb-3" />
              <img
                class="rounded-lg mx-auto"
                src="/images/bismillah.svg"
                width="142"
                height="32"
                alt=""
                style="max-width: 100%; height: auto"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="flex flex-col relative w-full">
        <Verse
          v-if="surah"
          :number-surah="surah.number"
          :surah="surah"
          :verse="surah.text"
          :translations="surah.translations"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const surah = ref<any>(null)

onMounted(async () => {
  const id: any = route.params.id
  const res = await import(`@/data/surah/${id}.json`)
  surah.value = res.default[id]
})

const isSpecial = computed(() => {
  if (!surah.value) return false
  const num = parseInt(surah.value.number)
  return num !== 1 && num !== 9
})
</script>
