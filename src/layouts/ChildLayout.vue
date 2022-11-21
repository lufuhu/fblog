<template>
  <div class="bg-white">
    <q-bar class="flex items-center">
      <div>Child</div>
      <div class="flex-1 h-full drag"></div>
      <div class="no-drag">
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
    onClose(){
      this.$ipcSend('child_close');
    },
  },
}
</script>

<style scoped>

</style>
