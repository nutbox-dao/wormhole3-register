<template>
  <div class="min-h-20rem w-full sm:max-w-30rem mx-auto bg-glass border-1 border-color84/30 rounded-1.6rem mt-15vh">
    <Login class="px-2rem pb-2rem" ref="loginRef" @close="$store.commit('saveShowLogin', false)"/>
    <div v-show="closeLoginTipVisible"
         class="absolute top-0 left-0 w-full h-full bg-primaryBg light:bg-white rounded-8px">
      <div class="w-full h-full flex flex-col justify-center px-2rem">
        <div class="break-word c-text-black gradient-text bg-purple-white light:bg-text-color17
                    whitespace-pre-line text-1.4rem leading-2.3rem mx-auto mb-2rem">
          {{$t('signInView.quitTip')}}
        </div>
        <div class="md:mt-2rem">
          <button class="c-text-black gradient-btn h-3.6rem w-full rounded-full
                      w-full mb-1rem text-1rem"
                  @click="closeLoginTipVisible=false">
            {{$t('signInView.cancel')}}
          </button>
          <button class="c-text-black bg-color84 light:bg-colorD6 light:text-white h-3.6rem w-full rounded-full
                      w-full text-1rem"
                  @click="closeLoginTipVisible=false, $store.commit('saveShowLogin', false)">
            {{$t('signInView.close')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/views/login/Login";
export default {
  components: {Login},
  data() {
    return {
      closeLoginTipVisible: false
    }
  }
}
</script>

<style scoped>

</style>
