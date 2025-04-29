export type SurahInfo = {
  translation: string
  arabic: string
  latin: string
  ayah_count: number
  index: number
  opening: string
  closing: string
}
export type SurahInfoJson = {
  surah_info: SurahInfo[]
}
