<template>
  <div class="bg-white">
    <q-bar class="flex items-center">
      <div>FBLOG</div>
      <div class="flex-1 h-full drag"></div>
      <div class="no-drag">
        <q-btn @click="onShowIcons" dense flat icon="icon"/>
        <q-btn @click="onMin" dense flat icon="remove"/>
        <q-btn @click="onMax" dense flat :icon="isMax ? 'content_copy':'crop_square'"/>
        <q-btn @click="onClose" dense flat icon="close"/>
      </div>
    </q-bar>
    <q-scroll-area class="w-screen" style="height: calc(100vh - 32px)">
      <router-view/>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      isMax: false,
    }
  },
  mounted() {

  },
  methods: {
    onShowIcons(){
      this.$ipcSend('show_win',{url:"/icons"});
    },
    onMax() {
      this.isMax = !this.isMax;
      this.$ipcSend('max');
    },
    onMin(){
      this.$ipcSend('min');
    },
    onClose(){
      this.$ipcSend('close');
    },
  },
}
</script>

<style scoped>

</style>
