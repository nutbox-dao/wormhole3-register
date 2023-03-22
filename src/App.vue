<template>
  <div class="w-full h-full relative flex flex-col">
    <div class="card-bg"></div>
    <div class="container max-w-50rem w-full mx-auto flex justify-between items-center px-15px relative py-20px">
      <img class="h-34px black-filter" src="~@/assets/logo.svg" alt="">
      <div class="flex-1 flex justify-end items-center relative">
        <button class="h-34px px-20px rounded-full w-max flex justify-between items-center cursor-pointer
                       gradient-btn text-14px"
                @click="onSelectLang">
          <span>CN / EN</span>
          <img class="w-20px h-20px ml-4px" src="~@/assets/icon-exchange.svg" alt="">
        </button>
      </div>
    </div>
    <div class="flex-1 w-full px-15px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import i18n from "@/lang";
export default {
  data() {
    return {
      lang: localStorage.getItem('language')
    }
  },
  methods: {
    onSelectLang() {
      this.lang = this.lang === 'en'? 'zh':'en'
      i18n.global.locale.value = this.lang
      console.log(i18n.global.locale)
      localStorage.setItem('language', this.lang)
    },
  }
}
</script>

<style scoped>
</style>
